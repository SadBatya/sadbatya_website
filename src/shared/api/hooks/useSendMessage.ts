import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../send-message";

export const useSendMessage = () => {
  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => console.log("Данные успешно отправлены"),
  });

  return {
    mutation: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isPending: mutation.isPending,
  };
};
