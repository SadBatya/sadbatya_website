"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const PROMOS = [
  {
    delay: 5000,
    text: "Нужен сайт для твоего бизнеса?",
    cta: "Да, нужен ❤️",
  },
  {
    delay: 10000,
    text: "Помочь найти работу и подсказать, как двигаться дальше?",
    cta: "Да, помочь ❤️",
  },
];

function goToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function PromoToasts() {
  useEffect(() => {
    const timers = PROMOS.map((promo) =>
      setTimeout(() => {
        toast(promo.text, {
          action: { label: promo.cta, onClick: goToContact },
          duration: Infinity,
        });
      }, promo.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
