import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Services } from "./services";
import { OrderProvider } from "../model/order-context";

const placeholderSections = [
  { id: "posts", label: "Посты" },
  { id: "contact", label: "Контакты" },
];

export function HomePage() {
  return (
    <OrderProvider>
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <Services />

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
    </OrderProvider>
  );
}
