import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: Props) => (
  <button className={twMerge("relative group", className)}>
    <span className="px-3 py-1 relative font-medium rounded-md border border-white/30 hover:border-white/80 bg-black cursor-pointer transition-all duration-500">
      {children}
    </span>
    <span
      className={twMerge(
        "animate-pulse w-0 h-0 rounded-md group-hover:w-[calc(100%+12px)] group-hover:h-[calc(100%+12px)] z-[-1] transition-all duration-500",
        "absolute opacity-0 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2",
        "bg-linear-to-r/longer from-indigo-500 to-teal-400 blur-lg bg-[length:400%]"
      )}
    />
  </button>
);
