import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../create-order";
import { toast } from "react-toastify";

export const useCreateOrder = () => {
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () =>
      toast("Заказ успешно отправлен", {
        theme: "dark",
        type: "success",
        position: "bottom-right",
      }),
  });

  return {
    createOrder: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};
