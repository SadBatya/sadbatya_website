"use client";
import { motion, useScroll, useSpring } from "motion/react";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 w-full h-0.5 origin-left transition-all duration-75 bg-white/80 z-[100]"
      style={{
        scaleX,
      }}
    />
  );
};
