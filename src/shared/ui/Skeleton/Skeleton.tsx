import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const Skeleton = ({ className }: Props) => (
  <div
    className={twMerge(
      "rounded-md w-fit h-fit bg-white/80 animate-pulse p-4",
      className
    )}
  />
);
