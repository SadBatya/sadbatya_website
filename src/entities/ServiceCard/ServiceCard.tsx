import { Title, Subtitle, Badge, CounterWithButton } from "@/shared/ui";
import { CalculateDiscount } from "@/shared/utils";
import { useServices } from "@/page/main/section-services/context/Provider";
import { twMerge } from "tailwind-merge";
import { IServiceCard } from "@/shared/types";

type Props = IServiceCard;

export const ServiceCard = (service: Props) => {
  const { toggleService, selectedServices, handleHoursIncrement } =
    useServices();

  const { id, title, subtitle, price, discount, isPopular, perHour, hours } =
    service;

  const isSelectedService = selectedServices.some((s) => s.id === id);

  const isDiscountPrice =
    discount && price ? CalculateDiscount(price, discount) : price;

  return (
    <div
      onClick={() => toggleService({ ...service, price: isDiscountPrice })}
      className={twMerge(
        "flex items-center bg-white/5 gap-4 justify-between p-4 rounded-md border border-white/50 transition-all duration-300 cursor-pointer",
        isSelectedService && "bg-white/10 border-green-500"
      )}
    >
      <div className="flex flex-col gap-4">
        <Title tag="h5">{title}</Title>
        <Subtitle size="small" className="text-white/50 text-left">
          {subtitle}
        </Subtitle>
      </div>
      <div className="flex flex-col gap-2 items-end">
        {price ? (
          <div className="text-2xl flex-wrap font-bold justify-end text-nowrap flex items-end gap-2">
            {discount && <s className="text-white/50 ">{price}₽</s>}
            <span>{isDiscountPrice} ₽</span>
            {perHour && "/час"}
          </div>
        ) : (
          <div className="text-2xl font-bold text-nowrap">Free</div>
        )}
        {perHour && (
          <CounterWithButton
            minValue={1}
            maxValue={10}
            count={hours || 1}
            handleIncrement={() => handleHoursIncrement(id, service)}
            handleDecrement={() => handleHoursIncrement(id, service)}
          />
        )}
        <div className="flex items-end justify-end flex-wrap gap-2">
          {isPopular && (
            <Badge className="border-green-500" text="Популярный" />
          )}
          {discount && (
            <Badge
              className="border-red-500"
              text={"Скидка " + discount + "%"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
