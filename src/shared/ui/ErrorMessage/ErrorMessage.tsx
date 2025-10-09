import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: Props) => (
  <span className="text-red-500 text-xs">{children}</span>
);
