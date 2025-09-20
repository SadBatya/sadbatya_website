"use client";

import { Section, Title, Textarea, Input, Button } from "@/shared/ui";
import { useCookies } from "@/shared/hooks";
import { useActionState } from "react";
import axios from "axios";
import Image from "next/image";
import { externalPath } from "@/shared/routes";

interface IFormData {
  message: {
    name: string;
    telegram: string;
    message?: string;
  };
  errors?: string[];
  success: boolean;
}

export const SectionForm = () => {
  const { value: formStateCookie, setCookie: setFormStateCookie } = useCookies(
    "main-form",
    ""
  );

  const [state, submitAction, isPending] = useActionState<IFormData, FormData>(
    async (_prev, formData) => {
      const name = (formData.get("name") ?? "").toString().trim();
      const telegram = (formData.get("telegram") ?? "").toString().trim();
      const message =
        (formData.get("message") ?? "").toString().trim() || undefined;

      try {
        await axios.post("/api/send", { name, telegram, message });
        if (state.success) {
          setFormStateCookie("true", 1);
        }
        return {
          message: { name, telegram, message },
          errors: [],
          success: true,
        };
      } catch (e) {
        const err = e instanceof Error ? e.message : "Неизвестная ошибка";
        console.error(e, "Ошибка отправки формы");
        return {
          message: { name, telegram, message },
          errors: [err],
          success: false,
        };
      }
    },
    {
      message: { name: "", telegram: "", message: undefined },
      errors: [],
      success: false,
    }
  );

  if (state.success || formStateCookie === "true") {
    return (
      <Section className="flex flex-col gap-8 items-center justify-center">
        <span className="text-white text-center font-semibold uppercase text-2xl">
          Данные успешно отправлены
        </span>
        <Image src="/gifs/raccoon.gif" alt="raccoon" width={300} height={300} />
        <Button
          href={externalPath.telegramChannel}
          target="_blank"
          className="px-8 py-2 text-lg"
        >
          Перейти в телеграм
        </Button>
      </Section>
    );
  }

  return (
    <Section>
      <Title tag="h2" className="mb-16 lg:mb-20">
        Связаться со мной
      </Title>

      <form
        action={submitAction}
        className="max-w-[680px] items-center mx-auto flex flex-col gap-8"
      >
        <Input placeholder="Имя..." name="name" type="text" />
        <Input placeholder="Телеграм..." name="telegram" type="text" />
        <Textarea placeholder="Сообщение..." name="message" />
        <Button disabled={isPending} className="px-8 py-2 text-lg">
          {isPending ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </Section>
  );
};
