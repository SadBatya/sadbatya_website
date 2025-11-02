import { useQuery } from "@tanstack/react-query";
import { getTests } from "../get-tests";

export const useGetTests = () =>
  useQuery({
    queryKey: ["tests"],
    queryFn: getTests,
  });
