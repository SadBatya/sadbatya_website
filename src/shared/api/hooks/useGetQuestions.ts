import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../get-questions";
import { type Level } from "@/shared/lib";

export const useGetQuestions = (title: string, level: Level, take: number) =>
  useQuery({
    queryKey: ["questions", title, level, take],
    queryFn: () => getQuestions(title, level, take),
  });
