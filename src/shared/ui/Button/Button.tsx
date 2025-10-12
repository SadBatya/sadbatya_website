import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface Props {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  type?: "submit" | "button";
  dataTestId?: string;
}

export const Button = ({
  children,
  className,
  disabled,
  href,
  target = "_self",
  onClick,
  dataTestId,
  type = "button",
}: Props) => {
  if (href) {
    return (
      <Link href={href} target={target} className="relative group w-fit">
        <Content className={className}>{children}</Content>
      </Link>
    );
  }

  return (
    <button
      data-testid={dataTestId}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="relative group w-fit"
    >
      <Content className={twMerge("text-nowrap", className)}>
        {children}
      </Content>
    </button>
  );
};

const Content = ({ children, className }: Props) => (
  <>
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
  </>
);
