import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Services } from "./services";
import { Contact } from "./contact";
import { OrderProvider } from "../model/order-context";

export function HomePage() {
  return (
    <OrderProvider>
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Projects />
        <Services />

        <section
          id="posts"
          className="flex min-h-screen items-center justify-center border-t border-border text-2xl font-bold text-muted-foreground-subtle"
        >
          Посты — скоро
        </section>

        <Contact />
      </main>
    </OrderProvider>
  );
}
