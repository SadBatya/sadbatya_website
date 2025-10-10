"use client";
import { motion, useScroll } from "motion/react";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 w-full h-1 origin-left transition-all duration-75 bg-white/80 z-[100]"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};
