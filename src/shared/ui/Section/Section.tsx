import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: ReactNode;
  id?: string;
  height?: "dvh" | "full";
}

export const Section = ({ className, children, id, height }: Props) => (
  <section
    className={twMerge(
      "max-w-[1440px] w-[calc(100%-40px)] mx-auto overflow-hidden",
      height === "full" ? "h-full py-20 lg:py-40" : "h-dvh",
      className
    )}
    id={id}
  >
    {children}
  </section>
);
