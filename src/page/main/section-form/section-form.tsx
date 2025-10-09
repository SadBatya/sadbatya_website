"use client";

import { Section, Title, Textarea, Input, Button } from "@/shared/ui";
import { useCookies } from "@/shared/hooks";
import { useActionState } from "react";
import axios from "axios";
import Image from "next/image";
import { externalPath } from "@/shared/routes";
import { useForm } from "react-hook-form";
import { zodSсhemes } from "@/shared/zod-schemes";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendMessage } from "@/shared/api/hooks";

interface IFormData {
  message: {
    name: string;
    telegram: string;
    message?: string;
  };
  errors?: string[];
  success: boolean;
}

const schema = z.object({
  name: zodSсhemes.name,
  telegram: zodSсhemes.telegram,
  textarea: zodSсhemes.textarea,
});

export const SectionForm = () => {
  const { value: formStateCookie, setCookie: setFormStateCookie } = useCookies(
    "main-form",
    ""
  );

  const { mutation: sendMessage, isPending, isSuccess } = useSendMessage();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    sendMessage(data);

    if (isSuccess) {
      setFormStateCookie("true", 1);
    }
  });

  // const [state, submitAction, isPending] = useActionState<IFormData, FormData>(
  //   async (_prev, formData) => {
  //     const name = (formData.get("name") ?? "").toString().trim();
  //     const telegram = (formData.get("telegram") ?? "").toString().trim();
  //     const message =
  //       (formData.get("message") ?? "").toString().trim() || undefined;

  //     try {
  //       await axios.post("/api/send", { name, telegram, message });

  //       setFormStateCookie("true", 1);

  //       return {
  //         message: { name, telegram, message },
  //         errors: [],
  //         success: true,
  //       };
  //     } catch (e) {
  //       const err = e instanceof Error ? e.message : "Неизвестная ошибка";
  //       console.error(e, "Ошибка отправки формы");
  //       return {
  //         message: { name, telegram, message },
  //         errors: [err],
  //         success: false,
  //       };
  //     }
  //   },
  //   {
  //     message: { name: "", telegram: "", message: undefined },
  //     errors: [],
  //     success: false,
  //   }
  // );

  if (isSuccess || formStateCookie === "true") {
    return (
      <Section
        height="full"
        id="form"
        className="flex flex-col gap-8 items-center justify-center"
      >
        <span className="text-white text-center font-semibold uppercase text-2xl">
          Данные успешно отправлены
        </span>
        <Image src="/gifs/raccoon.gif" alt="raccoon" width={300} height={300} />
        <Button
          href={externalPath.telegramChannel}
          target="_blank"
          className="px-4 py-2 text-lg flex items-center gap-2"
        >
          <Image
            src="/socials-icons/telegram.svg"
            alt="telegram"
            width={24}
            height={24}
          />
          Перейти в телеграм
        </Button>
      </Section>
    );
  }

  return (
    <Section height="full" id="form">
      <Title tag="h2" className="mb-16 lg:mb-20">
        Связаться со мной
      </Title>

      <form
        onSubmit={onSubmit}
        className="max-w-[680px] items-center mx-auto flex flex-col gap-8"
      >
        <Input
          {...register("name")}
          error={errors.name?.message}
          placeholder="Имя..."
          name="name"
          type="text"
        />
        <Input
          {...register("telegram")}
          error={errors.telegram?.message}
          placeholder="Телеграм..."
          name="telegram"
          type="text"
        />
        <Textarea
          {...register("textarea")}
          placeholder="Сообщение..."
          name="message"
        />
        <Button
          type="submit"
          disabled={isPending}
          className="px-8 py-2 text-lg"
        >
          {isPending ? "Отправка..." : "Отправить"}
        </Button>
      </form>
    </Section>
  );
};
