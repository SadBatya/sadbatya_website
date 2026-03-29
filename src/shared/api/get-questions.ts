import axios from "axios";
import { type Level } from "../lib";

export interface IQuestion {
  id: number;
  question: string;
  testPageId: number;
  level: string;
  testPage: {
    title: string;
  };
  answers: {
    id: number;
    answer: string;
    isCorrect: boolean;
    questionId: number;
  }[];
}

export const getQuestions = async (
  title: string,
  level: Level,
  take: number
) => {
  const response = await axios.get("/api/get-questions", {
    params: {
      title,
      level,
      take,
    },
  });

  return response.data as IQuestion[];
};
