"use client";

import { ServiceCard, Title } from "@/shared/ui";

import { services } from "../model/data";

import { useServices } from "@/page/main/section-services/context/Provider";

import { CreateOrder } from "@/features/create-order";

export const ServicesCalculator = () => {
  const { price, clearSelection, selectedServices } = useServices();

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
      <CreateOrder
        price={price}
        onClear={clearSelection}
        selectedServices={selectedServices}
      />
    </div>
  );
};
