"use client";

import { Button } from "@/shared/ui/button";
import { GithubIcon, TelegramIcon } from "@/shared/ui/icons";
import { useTypewriter } from "@/shared/lib/use-typewriter";
import { externalLinks } from "@/shared/config/nav";

const PHRASES = [
  "Разработка",
  "Менторинг",
  "Истории про айти",
  "Обо мне",
  "Проекты",
];

export function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section className="relative grid min-h-[calc(100vh-68px)] place-items-center overflow-hidden px-6 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--foreground) 5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--foreground) 5%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent 75%)",
        }}
      />

      <div className="relative flex max-w-[960px] flex-col items-center gap-7 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-bold tracking-[.16em] text-muted-foreground-subtle uppercase">
          <span className="size-1.5 rounded-full bg-primary" />
          Свободен для новых проектов
        </div>

        <h1 className="m-0 text-[clamp(48px,9vw,116px)] leading-[0.94] font-bold tracking-[-.045em] text-balance">
          Sadbatya
          <br />
          <span className="text-primary">{typed}</span>
          <span className="ml-[.06em] inline-block h-[.78em] w-[.06em] translate-y-[.06em] animate-[blink_1s_steps(1)_infinite] bg-primary align-middle" />
        </h1>

        <p className="m-0 max-w-[620px] text-[clamp(16px,2vw,19px)] leading-relaxed text-balance text-muted-foreground">
          Фронтенд-разработчик и IT-ментор. Собираю интерфейсы, которые
          держат миллионы пользователей, и помогаю тебе дойти до оффера.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            size="lg"
            className="shadow-glow"
            render={<a href="#services" />}
            nativeButton={false}
          >
            Рассчитать стоимость
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href="#projects" />}
            nativeButton={false}
          >
            Смотреть проекты
          </Button>
        </div>

        <div className="mt-2 flex gap-2.5">
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
          >
            <GithubIcon className="size-[19px]" />
          </a>
          <a
            href={externalLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
          >
            <TelegramIcon className="size-[19px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
