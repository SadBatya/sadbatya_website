import { telegramApi } from "./api";

interface ICreateOrder {
  name: string;
  telegram: string;
  textarea?: string;
  services: string;
  price: number;
}

export const createOrder = (order: ICreateOrder) => {
  const response = telegramApi.post("/crete-order", order);

  return response;
};
