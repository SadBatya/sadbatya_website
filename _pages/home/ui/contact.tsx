"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { leadSchema, type LeadFormValues } from "@/shared/lib/lead-schema";
import { useCookie } from "@/shared/lib/use-cookie";
import { createOrder, sendApplication } from "@/shared/api/leads";
import { useOrder } from "../model/order-context";

const SENT_COOKIE = "lead-sent";

export function Contact() {
  const { pendingOrder, clearPendingOrder } = useOrder();
  const { value: sentCookie, setCookie } = useCookie(SENT_COOKIE);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadSchema) });

  useEffect(() => {
    if (pendingOrder) {
      reset({
        name: pendingOrder.name,
        telegram: pendingOrder.telegram,
        message: pendingOrder.message,
      });
    }
  }, [pendingOrder, reset]);

  const onSubmit = async (values: LeadFormValues) => {
    setSubmitError("");
    setIsPending(true);
    const result = pendingOrder
      ? await createOrder({ ...values, services: pendingOrder.services, price: pendingOrder.price })
      : await sendApplication(values);
    setIsPending(false);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    setSent(true);
    setCookie("true", 1);
    clearPendingOrder();
  };

  const showSuccess = sent || sentCookie === "true";

  return (
    <section id="contact" className="mx-auto max-w-[760px] px-6 py-[110px] text-center">
      <p className="mb-3.5 text-[11px] font-bold tracking-[.18em] text-muted-foreground-subtle uppercase">
        Контакты
      </p>
      <h2 className="m-0 mb-3 text-[clamp(30px,4vw,46px)] leading-[1.08] font-bold tracking-[-.035em]">
        Оставь заявку
      </h2>
      <p className="m-0 mb-9 text-[17px] text-muted-foreground">
        Напишу тебе в телеграм в течение дня.
      </p>

      <div className="rounded-xl border border-border bg-card p-8 text-left shadow-card-lg">
        {showSuccess ? (
          <div className="flex flex-col items-center gap-3.5 py-6 text-center">
            <span className="grid size-13 place-items-center rounded-full border border-primary/40 bg-primary/10">
              <Check className="size-6 text-primary" />
            </span>
            <div className="text-xl font-bold tracking-tight">
              Данные успешно отправлены
            </div>
            <div className="text-[15px] text-muted-foreground">
              Напишу тебе в телеграм в течение дня.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <Input placeholder="Имя" {...register("name")} />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
            <Input placeholder="Telegram" {...register("telegram")} />
            {errors.telegram && (
              <p className="text-xs text-destructive">{errors.telegram.message}</p>
            )}
            <Textarea placeholder="Сообщение" rows={4} {...register("message")} />
            {submitError && (
              <p className="text-[13px] text-destructive">{submitError}</p>
            )}
            <Button type="submit" size="lg" disabled={isPending} className="shadow-glow">
              {isPending ? "Отправляю…" : "Отправить"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
