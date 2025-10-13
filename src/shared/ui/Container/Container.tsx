import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Container = ({ children, className, onClick }: Props) => (
  <div
    onClick={onClick}
    className={twMerge(
      "cursor-pointer transition-all border-white/50 border hover:border-white/80 rounded-md p-4",
      className
    )}
  >
    {children}
  </div>
);
