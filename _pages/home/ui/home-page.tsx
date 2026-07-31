import { Hero } from "./hero";

const placeholderSections = [
  { id: "about", label: "Обо мне" },
  { id: "projects", label: "Проекты" },
  { id: "services", label: "Менторинг / услуги" },
  { id: "posts", label: "Посты" },
  { id: "contact", label: "Контакты" },
];

export function HomePage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <Hero />

      {placeholderSections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="flex min-h-screen items-center justify-center border-t border-border text-2xl font-bold text-muted-foreground-subtle"
        >
          {s.label} — скоро
        </section>
      ))}
    </main>
  );
}
