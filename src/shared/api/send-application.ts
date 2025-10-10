import axios from "axios";

interface ICreateOrder {
  name: string;
  telegram: string;
  textarea?: string;
}

export const sendApplication = (order: ICreateOrder) => {
  const response = axios.post("api/send-application", order);

  return response;
};
