"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import { cn } from "@/shared/lib/utils";
import { navLinks } from "@/shared/config/nav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[80] border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center gap-8 px-6">
        <Link href="#top" className="flex flex-none items-center gap-2.5">
          <span className="grid size-[26px] place-items-center rounded-lg border border-primary/40 bg-primary/10 text-xs font-extrabold tracking-tight text-primary">
            S
          </span>
          <span className="text-[15px] font-bold tracking-[.14em] uppercase">
            Sadbatya
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 min-[941px]:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-none items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-secondary hover:text-foreground",
                link.soon ? "text-muted-foreground-subtle" : "text-muted-foreground"
              )}
            >
              {link.label}
              {link.soon && (
                <Badge
                  variant="outline"
                  className="text-muted-foreground-subtle text-[9px] tracking-[.1em] uppercase"
                >
                  Скоро
                </Badge>
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex flex-none items-center gap-2.5">
          <ThemeToggle />
          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            className="hidden min-[941px]:inline-flex"
          >
            Оставить заявку
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="min-[941px]:hidden"
                  aria-label="Меню"
                />
              }
            >
              <Menu className="size-4.5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex flex-col gap-0 data-[side=right]:w-full data-[side=right]:sm:max-w-none"
            >
              <SheetTitle className="sr-only">Меню навигации</SheetTitle>
              <div className="flex h-[68px] flex-none items-center justify-between border-b border-border px-6">
                <span className="text-[15px] font-bold tracking-[.14em] uppercase">
                  Sadbatya
                </span>
                <SheetClose
                  render={
                    <Button variant="outline" size="icon" aria-label="Закрыть" />
                  }
                >
                  <X className="size-4.5" />
                </SheetClose>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-1 p-6">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 border-b border-border py-3.5 text-3xl font-bold tracking-tight",
                          link.soon ? "text-muted-foreground-subtle" : "text-foreground"
                        )}
                      />
                    }
                  >
                    <>
                      {link.label}
                      {link.soon && (
                        <Badge
                          variant="outline"
                          className="text-muted-foreground-subtle text-[10px] tracking-[.1em] uppercase"
                        >
                          Скоро
                        </Badge>
                      )}
                    </>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex-none p-6">
                <SheetClose
                  nativeButton={false}
                  render={
                    <Button
                      size="lg"
                      className="w-full"
                      render={<Link href="#contact" />}
                      nativeButton={false}
                    />
                  }
                >
                  Оставить заявку
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
