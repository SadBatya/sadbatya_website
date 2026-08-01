import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  desc: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    slug: "akustik",
    title: "Акустик",
    desc: "Магазин слуховых аппаратов с подбором и записью к специалисту.",
    tags: ["E-commerce", "Next.js"],
  },
  {
    slug: "boost",
    title: "Boost",
    desc: "Платформа подготовки к ОГЭ и ЕГЭ с личным кабинетом ученика.",
    tags: ["EdTech", "React"],
  },
  {
    slug: "fitsharing",
    title: "Fitsharing",
    desc: "Сервис аренды тренажёров: каталог, расчёт срока, доставка.",
    tags: ["Сервис", "TypeScript"],
  },
  {
    slug: "hitebbq",
    title: "Hite BBQ",
    desc: "Сайт ресторана с меню и оформлением доставки.",
    tags: ["HoReCa", "Доставка"],
  },
  {
    slug: "ibankrot",
    title: "IBankrot",
    desc: "Юридическая помощь при банкротстве: заявки и консультации.",
    tags: ["Legal", "Лендинг"],
  },
  {
    slug: "result",
    title: "Result",
    desc: "Обучение фронтенду: программа, наставники, набор групп.",
    tags: ["EdTech", "CRM"],
  },
  {
    slug: "taxiritm",
    title: "Taxi Ritm",
    desc: "Таксопарк: подключение водителей и условия аренды.",
    tags: ["Транспорт", "Формы"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href="#projects"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-lg"
    >
      <div className="relative grid h-[196px] place-items-center bg-muted">
        <span className="text-6xl font-bold text-muted-foreground-subtle/60 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:text-primary/70">
          {project.title[0]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5.5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-[19px] font-bold tracking-tight">
          {project.title}
        </div>
        <p className="text-sm leading-relaxed text-balance text-muted-foreground">
          {project.desc}
        </p>
        <div className="mt-auto flex items-center gap-1.5 pt-2.5 text-[13px] font-semibold text-primary">
          Перейти на сайт
          <ArrowUpRight className="size-[13px]" />
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1240px] px-6 pb-[110px]"
    >
      <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3.5 text-[11px] font-bold tracking-[.18em] text-muted-foreground-subtle uppercase">
            Проекты
          </p>
          <h2 className="m-0 text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-.035em]">
            Работы, в которых участвовал
          </h2>
        </div>
        <div className="text-sm text-muted-foreground-subtle">
          7 коммерческих проектов
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
