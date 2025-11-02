import axios from "axios";
import { type Level } from "../lib";

export const getQuestions = async (title: string, level: Level, take: number) => {
  const response = await axios.get("/api/get-questions", {
    params: {
      title,
      level,
      take,
    },
  });

  return response.data;
};
