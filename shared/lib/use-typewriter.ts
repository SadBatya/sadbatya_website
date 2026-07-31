"use client";

import { useEffect, useRef, useState } from "react";

const TICK_MS = 90;
const PAUSE_TICKS = 14;

/** Types out `phrases` one at a time, pausing on each before deleting and moving on. */
export function useTypewriter(phrases: string[]) {
  const [typed, setTyped] = useState("");
  const phraseIndex = useRef(0);
  const direction = useRef<1 | -1>(1);
  const pause = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const full = phrases[phraseIndex.current];
      setTyped((cur) => {
        if (direction.current > 0) {
          if (cur.length < full.length) return full.slice(0, cur.length + 1);
          direction.current = -1;
          pause.current = PAUSE_TICKS;
          return cur;
        }
        if (pause.current > 0) {
          pause.current -= 1;
          return cur;
        }
        if (cur.length > 0) return cur.slice(0, -1);
        direction.current = 1;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        return cur;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [phrases]);

  return typed;
}
