"use client";

import { createContext, type ReactNode, useState, useContext } from "react";
import { type IServiceCard } from "@/shared/types";

interface IServicesContext {
  price: number;
  selectedServices: IServiceCard[];
  toggleService: (service: IServiceCard) => void;
  clearSelection: () => void;
  handleHoursIncrement: (id: number, service: IServiceCard) => void;
}

export const ServicesContext = createContext<IServicesContext | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}

export const ServiceProvider = ({ children }: Props) => {
  const [selectedServices, setSelectedServices] = useState<IServiceCard[]>([]);

  const handleHoursIncrement = (id: number, service: IServiceCard) => {
    setSelectedServices((prev) => {
      const currentService = prev.find((s) => s.id === id);

      if (currentService && currentService?.hours) {
        currentService.hours += 1;
      } else {
        return [...prev, { ...service, hours: 2 }];
      }

      return prev;
    });
  };

  const toggleService = (service: IServiceCard) => {
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

  const price = selectedServices.reduce((acc, service) => {
    return acc + (service.price || 0) * (service.hours || 1);
  }, 0);

  return (
    <ServicesContext.Provider
      value={{
        price,
        selectedServices,
        toggleService,
        clearSelection,
        handleHoursIncrement,
      }}
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
