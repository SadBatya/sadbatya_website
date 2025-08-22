import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = ({ children, className, tag = "h1" }: Props) => {
  if (tag === "h1") {
    return (
      <h1
        className={twMerge("lg:text-[48px] text-[38px] text-center", className)}
      >
        {children}
      </h1>
    );
  }

  if (tag === "h2") {
    return (
      <h2
        className={twMerge("lg:text-[40px] text-[30px] text-center", className)}
      >
        {children}
      </h2>
    );
  }

  if (tag === "h3") {
    return (
      <h3
        className={twMerge("lg:text-[30px] text-[20px] text-center", className)}
      >
        {children}
      </h3>
    );
  }

  if (tag === "h4") {
    return <h4 className={twMerge("", className)}>{children}</h4>;
  }

  if (tag === "h5") {
    return <h5 className={twMerge("", className)}>{children}</h5>;
  }

  if (tag === "h6") {
    return <h6 className={twMerge("", className)}>{children}</h6>;
  }
};
