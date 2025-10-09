import { telegramApi } from "./api";

interface ICreateOrder {
  name: string;
  telegram: string;
  textarea?: string;
}

export const sendMessage = (order: ICreateOrder) => {
  const response = telegramApi.post("/send", order);

  return response;
};
