"use client";

import AnimatedNumbers from "react-animated-numbers";

interface Props {
  number: number;
  className?: string;
  fontSize?: number;
  color?: string;
}

export const Counter = ({ number, className, fontSize, color }: Props) => {
  return (
    <div className="flex items-center gap-2 text-2xl font-semibold text-white">
      <AnimatedNumbers
        useThousandsSeparator
        className={className}
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.1,
        })}
        animateToNumber={number}
        fontStyle={{
          fontSize: fontSize || 40,
          color: color || "white",
        }}
      />
      ₽
    </div>
  );
};
