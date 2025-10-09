"use client";

import {
  ServiceCard,
  Counter,
  Input,
  Button,
  Textarea,
  Title,
  Subtitle,
} from "@/shared/ui";

import { services } from "../model/data";
import { useForm } from "react-hook-form";
import { useServices } from "@/page/main/section-services/context/Provider";
import z from "zod";
import { zodSсhemes } from "@/shared/zod-schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateOrder } from "@/shared/api/hooks";

const schema = z.object({
  name: zodSсhemes.name,
  telegram: zodSсhemes.telegram,
  // services: zodSсhemes.services,
  textarea: zodSсhemes.textarea,
  // price: zodSсhemes.price,
});

export const ServicesCalculator = () => {
  const { price, clearSelection, selectedServices } = useServices();
  const { createOrder, isPending, isSuccess } = useCreateOrder();

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
      clearSelection();
      reset();
    }
  };

  return (
    <div className="flex gap-4 flex-col lg:flex-row justify-between">
      <div className="flex flex-col gap-4 flex-1 w-full">
        <Title tag="h3">Менторинг</Title>
        {services.mentoring
          .sort((a, b) => Number(b.isPopular) - Number(a.isPopular))
          .map(
            (
              { id, price, title, subtitle, discount, isPopular, perHour },
              index
            ) => (
              <ServiceCard
                id={id}
                perHour={perHour}
                isPopular={isPopular}
                key={index}
                title={title}
                subtitle={subtitle}
                price={price}
                discount={discount}
              />
            )
          )}
        <Title tag="h3">Заказать проект</Title>
        {services.services
          .sort((a, b) => Number(b.isPopular) - Number(a.isPopular))
          .map(
            (
              { id, price, title, subtitle, discount, isPopular, perHour },
              index
            ) => (
              <ServiceCard
                id={id}
                perHour={perHour}
                isPopular={isPopular}
                key={index}
                title={title}
                subtitle={subtitle}
                price={price}
                discount={discount}
              />
            )
          )}
      </div>

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
          // sample="Здравствуйте! Меня зовут {Ваше имя}."
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
          <Button className="px-4 py-3" type="button" onClick={clearSelection}>
            Сбросить
          </Button>
          <Button disabled={isPending} className="px-4 py-3" type="submit">
            Заказать услугу
          </Button>
        </div>
      </form>
    </div>
  );
};
