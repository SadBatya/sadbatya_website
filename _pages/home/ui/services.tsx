"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useAnimatedNumber } from "@/shared/lib/use-animated-number";
import { formatPrice, formatTotal, originalPrice } from "@/shared/lib/format-price";
import { leadSchema, type LeadFormValues } from "@/shared/lib/lead-schema";
import { cn } from "@/shared/lib/utils";
import { mentoring, building, allServices, type ServiceOption } from "../model/services-data";
import { useOrder } from "../model/order-context";

function PriceLine({ service }: { service: ServiceOption }) {
  return (
    <div className="mt-auto flex flex-wrap items-baseline gap-2">
      <span className="text-xl font-bold tracking-tight">
        {formatPrice(service.price)}
      </span>
      {service.discount && (
        <span className="text-[13px] text-muted-foreground-subtle line-through">
          {formatPrice(originalPrice(service.price, service.discount))}
        </span>
      )}
    </div>
  );
}

function SelectIndicator({ selected }: { selected: boolean }) {
  return (
    <span className="relative grid size-[22px] flex-none place-items-center rounded-[7px] border border-border-strong">
      <span
        className={cn(
          "absolute -inset-px rounded-[7px] bg-primary transition-opacity",
          selected ? "opacity-100" : "opacity-0"
        )}
      />
      <Check
        className={cn(
          "relative size-3 stroke-[3] text-primary-foreground transition-opacity",
          selected ? "opacity-100" : "opacity-0"
        )}
      />
    </span>
  );
}

function ServiceCard({
  service,
  selected,
  onToggle,
}: {
  service: ServiceOption;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className="relative flex min-h-[158px] flex-col gap-2.5 rounded-xl border border-border bg-card p-5 text-left shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-lg"
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl border border-primary shadow-glow transition-opacity",
          selected ? "opacity-100" : "opacity-0"
        )}
      />
      {(service.popular || service.discount) && (
        <span className="absolute -top-2.5 left-4 rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold tracking-[.08em] text-primary-foreground uppercase">
          {service.popular ? "Популярное" : `−${service.discount}%`}
        </span>
      )}
      <div className="flex items-start justify-between gap-2.5">
        <div className="text-[15px] leading-snug font-bold tracking-tight">
          {service.title}
        </div>
        <SelectIndicator selected={selected} />
      </div>
      <div className="text-[13px] text-muted-foreground-subtle">{service.meta}</div>
      <PriceLine service={service} />
    </button>
  );
}

function ServiceRow({
  service,
  selected,
  onToggle,
  last,
}: {
  service: ServiceOption;
  selected: boolean;
  onToggle: () => void;
  last: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={cn(
        "relative flex w-full items-center gap-4 px-5.5 py-4.5 text-left transition-colors hover:bg-secondary",
        !last && "border-b border-border"
      )}
    >
      <span
        className={cn(
          "absolute inset-y-0 left-0 w-0.5 bg-primary transition-opacity",
          selected ? "opacity-100" : "opacity-0"
        )}
      />
      <SelectIndicator selected={selected} />
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold">{service.title}</span>
        <span className="mt-0.5 block text-[13px] text-muted-foreground-subtle">
          {service.meta}
        </span>
      </span>
      <span className="flex-none text-right">
        <span className="block text-base font-bold whitespace-nowrap">
          {formatPrice(service.price)}
        </span>
        {service.discount && (
          <span className="block text-xs text-muted-foreground-subtle line-through">
            {formatPrice(originalPrice(service.price, service.discount))}
          </span>
        )}
      </span>
    </button>
  );
}

export function Services() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const { requestOrder } = useOrder();

  const toggle = (id: string) =>
    setSelected((s) => ({ ...s, [id]: !s[id] }));

  const chosen = useMemo(
    () => allServices.filter((s) => selected[s.id]),
    [selected]
  );
  const total = useMemo(
    () => chosen.reduce((sum, s) => sum + s.price, 0),
    [chosen]
  );
  const shownTotal = useAnimatedNumber(total);

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadSchema) });

  const onSubmit = (values: LeadFormValues) => {
    requestOrder({
      name: values.name,
      telegram: values.telegram,
      message: values.message || chosen.map((c) => c.title).join(", "),
      services: chosen.map((c) => c.title).join(", "),
      price: total,
    });
  };

  const handleReset = () => {
    setSelected({});
  };

  return (
    <section id="services" className="border-t border-border bg-muted">
      <div className="mx-auto max-w-[1240px] px-6 py-[110px]">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3.5 text-[11px] font-bold tracking-[.18em] text-muted-foreground-subtle uppercase">
              Услуги
            </p>
            <h2 className="m-0 mb-2.5 text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-.035em]">
              Собери свой заказ
            </h2>
            <p className="m-0 text-base text-muted-foreground">
              Отметь нужное — стоимость посчитается сама.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-start gap-7"
        >
          <div className="flex min-w-0 flex-col gap-8">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[.16em] text-muted-foreground-subtle uppercase">
                Менторинг
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5">
                {mentoring.map((s) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    selected={!!selected[s.id]}
                    onToggle={() => toggle(s.id)}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[.16em] text-muted-foreground-subtle uppercase">
                Заказать проект
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card-lg">
                {building.map((s, i) => (
                  <ServiceRow
                    key={s.id}
                    service={s}
                    selected={!!selected[s.id]}
                    onToggle={() => toggle(s.id)}
                    last={i === building.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="sticky top-[92px] flex max-w-[430px] flex-col gap-4.5 rounded-xl border border-border bg-card p-6.5 shadow-card-lg">
            <p className="text-[11px] font-bold tracking-[.16em] text-muted-foreground-subtle uppercase">
              Твой заказ
            </p>
            <div className="flex flex-col gap-2.5">
              <Input placeholder="Имя" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
              <Input
                placeholder="Telegram, например @sadbatya"
                {...register("telegram")}
              />
              {errors.telegram && (
                <p className="text-xs text-destructive">{errors.telegram.message}</p>
              )}
              <Textarea
                placeholder="Пара слов о задаче"
                rows={3}
                {...register("message")}
              />
            </div>

            <div className="h-px bg-border" />

            <div className="flex min-h-6 flex-col gap-2">
              {chosen.length === 0 ? (
                <p className="text-sm text-muted-foreground-subtle">
                  Пока ничего не выбрано
                </p>
              ) : (
                chosen.map((c) => (
                  <div key={c.id} className="flex justify-between gap-3 text-sm">
                    <span className="text-muted-foreground">{c.title}</span>
                    <span className="font-semibold whitespace-nowrap">
                      {formatPrice(c.price)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-muted-foreground">Итого</span>
              <span className="text-[clamp(28px,4vw,38px)] font-bold tracking-[-.035em] text-primary tabular-nums">
                {formatTotal(shownTotal)}
              </span>
            </div>

            <div className="flex gap-2.5">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="flex-none"
              >
                Сбросить
              </Button>
              <Button type="submit" size="lg" className="flex-1 shadow-glow">
                Заказать услугу
              </Button>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}
