"use client";

import AnimatedNumbers from "react-animated-numbers";
import { twMerge } from "tailwind-merge";

interface Props {
  number: number;
  className?: string;
  fontSize?: number;
}

export const Counter = ({ number, className, fontSize }: Props) => {
  
  const getCurrentColor = (number: number) => {
    if (number < 1000) {
      return "red";
    } else if (number > 1000 && number < 3000) {
      return "yellow";
    } else if (number > 3000) {
      return "green";
    } else {
      return "white";
    }
  };

  return (
    <div
      className={twMerge(
        "flex items-center gap-2 lg:text-2xl font-semibold text-white",
        className
      )}
    >
      <AnimatedNumbers
        useThousandsSeparator
        className="transition-all text-sm lg:text-2xl duration-500"
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.1,
        })}
        animateToNumber={number}
        fontStyle={{
          fontSize: fontSize || 40,
          color: getCurrentColor(number),
        }}
      />
      ₽
    </div>
  );
};
