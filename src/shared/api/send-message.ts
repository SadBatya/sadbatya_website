import axios from "axios";

interface ICreateOrder {
  name: string;
  telegram: string;
  textarea?: string;
}

export const sendMessage = (order: ICreateOrder) => {
  const response = axios.post("api/send", order);

  return response;
};
