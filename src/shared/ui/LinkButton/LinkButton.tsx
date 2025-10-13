import Link from "next/link";
import { type ReactNode } from "react";
import { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

interface Props extends LinkProps {
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
}

export const LinkButton = ({ href, target, children, className }: Props) => (
  <Link className={twMerge("px-4 py-2 relative font-medium rounded-md border border-white/30 hover:border-white/80 bg-black cursor-pointer transition-all duration-500", className)} href={href} target={target}>
    {children}
  </Link>
);
