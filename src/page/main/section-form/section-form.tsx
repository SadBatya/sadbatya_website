"use client";

import { Section, Title, Textarea, Input, Button } from "@/shared";
import { useActionState } from "react";
import axios from "axios";

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
  const [state, submitAction, isPending] = useActionState<IFormData, FormData>(
    async (_prev, formData) => {
      const name = (formData.get("name") ?? "").toString().trim();
      const telegram = (formData.get("telegram") ?? "").toString().trim();
      const message =
        (formData.get("message") ?? "").toString().trim() || undefined;

      try {
        console.log(JSON.stringify({ name, telegram, message }));

        await axios.post("/api/send", { name, telegram, message });

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

  console.log(state, "state");

  return (
    <Section>
      <Title tag="h2" className="mb-16 lg:mb-20">
        Связаться со мной
      </Title>
      {state.success && (
        <span className="text-white text-2xl">Данные успешно отправлены</span>
      )}
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
