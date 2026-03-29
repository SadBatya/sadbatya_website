import axios from "axios";

interface IFormQuestions {
  name: string;
  telegram: string;
  test: string;
  level: string;
  message?: string;
}

export const sendFormQuestions = async (form: IFormQuestions) => {
  const response = axios.post("/api/send-form-questions", form);

  return response;
};
