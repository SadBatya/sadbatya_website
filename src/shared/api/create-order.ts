import axios from "axios";

interface ICreateOrder {
  name: string;
  telegram: string;
  textarea?: string;
  services: string;
  price: number;
}

export const createOrder = (order: ICreateOrder) => {
  const response = axios.post("api/create-order", order);

  return response;
};
