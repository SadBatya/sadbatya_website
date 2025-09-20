import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: ReactNode;
  height?: "dvh" | "full";
}

export const Section = ({ className, children, height = "dvh" }: Props) => (
  <section
    className={twMerge(
      `max-w-[1440px] w-[calc(100%-40px)] mx-auto h-${height} overflow-hidden`,
      height === "full" && "h-full py-20 lg:py-40",
      className
    )}
  >
    {children}
  </section>
);
