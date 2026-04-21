import type { ReactNode } from "react";
import style from "./Section.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => (
  <section className={`${style.section} ${className}`}>{children}</section>
);
