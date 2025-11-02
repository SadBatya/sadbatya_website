import axios from "axios";
import { type Level } from "../lib";

interface ITestData {
  id: number;
  level: string;
  time: number;
  questionCount: number;
  testPageId: number;
  about: string[];
  testPage: {
    title: string;
  };
}

export const getCurrentTestDescription = async (
  title: string,
  level: Level
) => {
  const response = await axios.get(`/api/get-current-test-description`, {
    params: {
      title,
      level,
    },
  });

  return response.data as ITestData;
};
