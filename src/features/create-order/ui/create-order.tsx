import { Textarea, Title, Subtitle, Input, Counter, Button } from "@/shared/ui";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodSсhemes } from "@/shared/zod-schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateOrder } from "@/shared/api/hooks";
import { type IServiceCard } from "@/shared/types";
import { FormSendCompleted } from "@/widgets";
import { useCookies } from "@/shared/hooks";

const schema = z.object({
  name: zodSсhemes.name,
  telegram: zodSсhemes.telegram,
  textarea: zodSсhemes.textarea,
});

interface Props {
  price: number;
  onClear: () => void;
  selectedServices: IServiceCard[];
}

export const CreateOrder = ({ selectedServices, onClear, price }: Props) => {
  const { createOrder, isPending, isSuccess } = useCreateOrder();
  const { value: formStateCookie, setCookie: setFormStateCookie } = useCookies(
    "order-form",
    ""
  );
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    const services = selectedServices.map((s) => s.title).join(", ");

    const order = { ...getValues(), services, price };
    createOrder(order);

    if (isSuccess) {
      setFormStateCookie("true", 1);
      onClear();
      reset();
    }
  };

  if (isSuccess || formStateCookie === "true") {
    return <FormSendCompleted />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex sticky top-32 flex-1 flex-col gap-4 p-4 h-fit border w-full  border-white/50 rounded-md"
    >
      <Title tag="h3">Заказать услугу</Title>
      <Subtitle size="large">Заполните форму</Subtitle>
      <Input
        {...register("name")}
        error={errors.name?.message}
        placeholder="Имя..."
        name="name"
      />
      <Input
        {...register("telegram")}
        placeholder="Телеграм..."
        error={errors.telegram?.message}
        name="telegram"
      />
      <Textarea
        {...register("textarea")}
        placeholder="Сообщение..."
        name="message"
      />
      <div className="flex flex-wrap items-center gap-2">
        {selectedServices.length > 0 && (
          <ul className="list-decimal list-inside">
            {selectedServices.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center font-bold lg:text-2xl gap-2">
        Итого:
        <Counter number={price} />
      </div>
      <div className="flex gap-4 items-start justify-between">
        <Button className="px-4 py-3" type="button" onClick={onClear}>
          Сбросить
        </Button>
        <Button disabled={isPending} className="px-4 py-3" type="submit">
          Заказать услугу
        </Button>
      </div>
    </form>
  );
};
