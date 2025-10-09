import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../create-order";

export const useCreateOrder = () => {
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => console.log("Заявка успешно отправлена"),
  });

  return {
    createOrder: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
