import { Title, Subtitle, Badge, CounterWithButton } from "@/shared/ui";
import { CalculateDiscount } from "@/shared/utils";
import { useServices } from "@/page/main/section-services/context/Provider";
import { twMerge } from "tailwind-merge";

interface Props {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  discount: number | null;
  isPopular: boolean;
  perHour: boolean;
}

export const ServiceCard = ({
  id,
  title,
  subtitle,
  price,
  discount,
  isPopular,
  perHour,
}: Props) => {
  const { toggleService, selectedServices } = useServices();

  const isSelectedService = selectedServices.some((s) => s.id === id);

  return (
    <div
      onClick={() => toggleService({ id, price })}
      className={twMerge(
        "flex items-center bg-white/5 gap-4 justify-between p-4 rounded-md border border-white/50 hover:border-white/80 transition-all duration-300 cursor-pointer",
        isSelectedService && "bg-white/10 border-white/80"
      )}
    >
      <div className="flex flex-col gap-4">
        <Title tag="h5">{title}</Title>
        <Subtitle size="small" className="text-white/50">
          {subtitle}
        </Subtitle>
      </div>
      <div className="flex flex-col gap-2 items-end">
        {discount ? (
          <div className="text-2xl font-bold flex items-center gap-2">
            <s>{price}</s>
            <span>{CalculateDiscount(price, discount)}</span>₽
            {perHour && "/час"}
          </div>
        ) : (
          <div className="text-2xl font-bold">
            {price} ₽{perHour && "/час"}
          </div>
        )}
        {perHour && <CounterWithButton count={55} setCount={() => {}} />}
        {isPopular && <Badge text="Популярный" />}
      </div>
    </div>
  );
};
