import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";

const placeholderSections = [
  { id: "about", label: "Обо мне" },
  { id: "projects", label: "Проекты" },
  { id: "services", label: "Менторинг / услуги" },
  { id: "posts", label: "Посты" },
  { id: "contact", label: "Контакты" },
];

export default function Home() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <section className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center gap-8 p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-bold tracking-[.18em] text-muted-foreground-subtle uppercase">
            Design foundation
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Sadbatya<span className="text-primary">.</span>
          </h1>
        </div>
        <Card className="w-full max-w-sm shadow-card-lg">
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Популярное</Badge>
              <Badge variant="secondary">−20%</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Хедер и мобильное меню готовы. Секции ниже — временные заглушки,
              будут заменены реальным контентом по плану.
            </p>
            <Button className="shadow-glow">Рассчитать стоимость</Button>
          </CardContent>
        </Card>
      </section>

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
