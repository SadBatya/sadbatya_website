"use client";

import { icons } from "../model/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const StackIcons = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-4 shrink-0 grid-cols-6 lg:grid-cols-4">
      {icons.map((icon, index) => (
        <Image
          className={twMerge(
            "grayscale cursor-pointer shrink-0 duration-500 hover:grayscale-0 transition-all opacity-50 hover:opacity-100 hover:scale-110",
            index === activeIcon && "opacity-100 scale-110 grayscale-0"
          )}
          key={icon}
          src={icon}
          alt=""
          width={65}
          height={65}
        />
      ))}
    </div>
  );
};
