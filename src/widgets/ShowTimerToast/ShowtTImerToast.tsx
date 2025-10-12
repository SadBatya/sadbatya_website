"use client";

import { toast } from "react-toastify";
import { type ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  delay: number;
  showTime?: number;
}

export const ShowTimerToast = ({ children, delay, showTime }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info(children, {
        theme: "dark",
        type: "info",
        position: "bottom-right",
        autoClose: showTime || 3000,
      });
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return <></>;
};
