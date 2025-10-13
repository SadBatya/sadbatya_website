import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

export const Chip = ({ text, className }: Props) => (
  <span
    className={twMerge(
      "px-2 py-1 text-[10px] rounded-md border text-white",
      className
    )}
  >
    {text}
  </span>
);
