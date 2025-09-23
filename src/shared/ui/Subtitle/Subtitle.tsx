import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const cvaSubtitle = tv({
  base: "text-center font-medium",
  variants: {
    size: {
      small: "text-[14px]",
      medium: "text-[16px]",
      large: "text-[18px]",
    },
  },
});

interface Props {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Subtitle = ({ children, size = "medium", className }: Props) => (
  <p className={twMerge(cvaSubtitle({ size }), className)}>{children}</p>
);
