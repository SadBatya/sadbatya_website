"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/shared/ui/sonner";
import { TooltipProvider } from "@/shared/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster closeButton />
    </ThemeProvider>
  );
}
