"use client";

import { createContext, useCallback, useContext, useState } from "react";

export type PendingOrder = {
  name: string;
  telegram: string;
  message: string;
  services: string;
  price: number;
};

type OrderContextValue = {
  pendingOrder: PendingOrder | null;
  requestOrder: (order: PendingOrder) => void;
  clearPendingOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [pendingOrder, setPendingOrder] = useState<PendingOrder | null>(null);

  const requestOrder = useCallback((order: PendingOrder) => {
    setPendingOrder(order);
    const contact = document.getElementById("contact");
    if (contact) {
      window.scrollTo({ top: contact.offsetTop - 80, behavior: "smooth" });
    }
  }, []);

  const clearPendingOrder = useCallback(() => setPendingOrder(null), []);

  return (
    <OrderContext.Provider value={{ pendingOrder, requestOrder, clearPendingOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
