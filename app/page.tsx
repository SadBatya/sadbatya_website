import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { ThemeToggle } from "@/shared/ui/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <ThemeToggle />
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
            Проверка токенов, шрифта Manrope и тени shadow-glow на акцентной
            кнопке.
          </p>
          <Button className="shadow-glow">Рассчитать стоимость</Button>
        </CardContent>
      </Card>
    </div>
  );
}
