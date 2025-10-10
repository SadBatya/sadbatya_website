import { useMutation } from "@tanstack/react-query";
import { sendApplication } from "../send-application";
import { toast } from "react-toastify";

export const useSendMessage = () => {
  const mutation = useMutation({
    mutationFn: sendApplication,
    onSuccess: () =>
      toast("Заявка успешно отправлена", {
        theme: "dark",
        type: "success",
        position: "bottom-right",
      }),
  });

  return {
    mutation: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isPending: mutation.isPending,
  };
};
