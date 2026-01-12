import { useMutation } from "@tanstack/react-query";
import { sendFormQuestions } from "../send-questions";
import { toast } from "react-toastify";

export const useSendFormQuestions = () => {
  const mutation = useMutation({
    mutationFn: sendFormQuestions,
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
