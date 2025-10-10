import { useMutation } from "@tanstack/react-query";
import { sendApplication } from "../send-application";

export const useSendMessage = () => {
  const mutation = useMutation({
    mutationFn: sendApplication,
    onSuccess: () => console.log("Данные успешно отправлены"),
  });

  return {
    mutation: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isPending: mutation.isPending,
  };
};
