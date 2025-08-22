import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children, className, disabled }: Props) => (
  <button disabled={disabled} className="relative group w-fit">
    <span
      className={twMerge(
        "px-3 py-1 relative font-medium rounded-md border border-white/30 hover:border-white/80 bg-black cursor-pointer transition-all duration-500",
        className
      )}
    >
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
