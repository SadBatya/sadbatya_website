import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/shared/ui/button";

const ABOUT_POINTS = [
  "5+ лет коммерческой разработки",
  "Enterprise-проекты на миллионы пользователей и быстрая адаптация в стартапах",
  "Высоконагруженные интерфейсы, оптимизация производительности и UX",
  "Полный цикл — от архитектуры до CI/CD и мониторинга",
];

const STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Strapi",
  "Docker",
  "Vercel",
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1240px] px-6 py-[110px]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-14">
        <div>
          <p className="mb-3.5 text-[11px] font-bold tracking-[.18em] text-muted-foreground-subtle uppercase">
            Обо мне
          </p>
          <h2 className="m-0 mb-8 text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-.035em] text-balance">
            Инженер, а не верстальщик
          </h2>
          <ul className="flex flex-col gap-4.5">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3.5">
                <span className="mt-px grid size-[22px] flex-none place-items-center rounded-[7px] border border-primary/35 bg-primary/10">
                  <Check className="size-3 stroke-[2.75] text-primary" />
                </span>
                <span className="text-base leading-relaxed text-balance text-muted-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="mt-8"
            render={<a href="#projects" />}
            nativeButton={false}
          >
            Подробнее
            <ArrowRight className="size-[15px]" />
          </Button>
        </div>

        <div className="rounded-xl border border-border bg-card p-7 shadow-card-lg">
          <p className="mb-5 text-[11px] font-bold tracking-[.16em] text-muted-foreground-subtle uppercase">
            Стек
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(104px,1fr))] gap-2.5">
            {STACK.map((tech) => (
              <div
                key={tech}
                className="cursor-default rounded-lg border border-border bg-secondary px-2.5 py-3.5 text-center text-[12.5px] font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
