"use client";
import { createContext, type ReactNode, useState, useContext } from "react";

interface IService {
  id: number;
  price: number;
}

interface IServicesContext {
  price: number;
  selectedServices: {
    id: number;
    price: number;
  }[];
  toggleService: (service: IService) => void;
  clearSelection: () => void;
}

export const ServicesContext = createContext<IServicesContext | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const ServiceProvider = ({ children }: Props) => {
  const [selectedServices, setSelectedServices] = useState<IService[]>([]);

  const toggleService = (service: IService) => {
    setSelectedServices((prev) => {
      const isSelected = prev.some((s) => s.id === service.id);

      if (isSelected) {
        return prev.filter((s) => s.id !== service.id);
      }

      return [...prev, service];
    });
  };

  const clearSelection = () => {
    setSelectedServices([]);
  };

  const price = selectedServices.reduce(
    (acc, service) => acc + service.price,
    0
  );

  return (
    <ServicesContext.Provider
      value={{ price, selectedServices, toggleService, clearSelection }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): IServicesContext => {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServiceProvider");
  }
  return context;
};
