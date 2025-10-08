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

import { useServices } from "@/page/main/section-services/context/Provider";

export const ServicesCalculator = () => {
  const { price } = useServices();

  return (
    <div className="flex gap-4 justify-between h-full">
      <div className="flex flex-col gap-4 w-full">
        {services.map(
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

      <form className="flex flex-col gap-4 p-4 border w-full h-fit border-white/50 rounded-md">
        <Title tag="h3">Заказать услугу</Title>
        <Subtitle size="large">Заполните форму</Subtitle>
        <Input placeholder="Имя..." name="name" />
        <Input placeholder="Телеграм..." name="telegram" />
        <Textarea placeholder="Сообщение..." name="message" />
        <div className="flex gap-4 items-center justify-between">
          <Button className="px-4 py-3" type="submit">
            Заказать услугу
          </Button>
          <Counter number={price} />
        </div>
      </form>
    </div>
  );
};
