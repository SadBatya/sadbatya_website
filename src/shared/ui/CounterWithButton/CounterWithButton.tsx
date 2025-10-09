import { type MouseEvent } from "react";

interface Props {
  count: number;
  maxValue?: number;
  minValue?: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const CounterWithButton = ({
  count,
  maxValue,
  minValue,
  handleIncrement,
  handleDecrement,
}: Props) => {
  const handleIncrementCount = () => {
    console.log("click");
    if (maxValue && count >= maxValue) {
      return;
    } else {
      handleIncrement();
    }
  };

  const handleDecrementCount = () => {
    if (minValue && minValue >= count) {
      return;
    } else {
      handleDecrement();
    }
  };

  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="flex items-center gap-4 bg-black/50 px-2 rounded-md hover:scale-110 transition-all"
    >
      <button className="cursor-pointer" onClick={handleDecrementCount}>
        -
      </button>
      <span className="text-white text-md">{count}</span>
      <button className="cursor-pointer" onClick={handleIncrementCount}>
        +
      </button>
    </div>
  );
};
