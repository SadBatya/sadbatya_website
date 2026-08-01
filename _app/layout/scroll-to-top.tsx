"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useScrollProgress } from "@/shared/lib/use-scroll-progress";
import { cn } from "@/shared/lib/utils";

export function ScrollToTop() {
  const progress = useScrollProgress();
  const visible = progress > 0.12;

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-6 bottom-6 z-[70] rounded-xl bg-card/80 backdrop-blur-xl transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="size-4" />
    </Button>
  );
}
