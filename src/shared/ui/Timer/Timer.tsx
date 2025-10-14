"use client";
import { Chip } from "@/shared/ui";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  minutes: number;
  onTimeUp: () => void;
  className?: string;
  pause?: boolean;
}

export const Timer = ({ minutes, onTimeUp, className, pause }: Props) => {
  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (pause) return prevTime;
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp, pause]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Chip
      className={twMerge(
        "text-sm",
        (time <= 120 || time < 180) && "text-amber-400",
        time <= 60 && "text-red-500",
        className
      )}
      text={formatTime(time)}
    />
  );
};
