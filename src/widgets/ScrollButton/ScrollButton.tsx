"use client";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const ScrollButton = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest > 0.2);
  });

  const handleScroolToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      onClick={handleScroolToTop}
      className={twMerge(
        "size-12 flex items-center text-white/50 hover:text-white/80 border bg-black transition-all hover:border-white/80 border-white/50 justify-center rounded-full shadow-2xl cursor-pointer fixed bottom-10 right-10",
        !isVisible && "opacity-0 pointer-events-none"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </button>
  );
};
