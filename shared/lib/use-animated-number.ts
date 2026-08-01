"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 520;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** Animates numeric transitions with the same cubic-ease timing as the design prototype. */
export function useAnimatedNumber(target: number) {
  const [shown, setShown] = useState(target);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const from = shown;
    const to = target;
    const t0 = performance.now();

    if (raf.current) cancelAnimationFrame(raf.current);

    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / DURATION_MS);
      const eased = easeOutCubic(k);
      setShown(Math.round(from + (to - from) * eased));
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return shown;
}
