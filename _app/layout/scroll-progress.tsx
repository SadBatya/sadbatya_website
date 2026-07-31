"use client";

import { useScrollProgress } from "@/shared/lib/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-[90] h-0.5 bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-linear"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
