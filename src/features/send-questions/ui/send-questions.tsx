"use client";

import { Textarea, Input, Button } from "@/shared/ui";
import { useCookies } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { zodSсhemes } from "@/shared/zod-schemes";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendFormQuestions } from "@/shared/api/hooks";
import { FormSendCompleted } from "@/widgets";

const schema = z.object({
  name: zodSсhemes.name,
  telegram: zodSсhemes.telegram,
  test: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 50 символов")
    .nonempty(),
  level: z
    .string()
    .min(2, "Минимум 2 символа")
    .max(20, "Максимум 50 символов")
    .nonempty(),
  message: zodSсhemes.textarea,
});

export const SendQuestions = () => {
  const { value: formStateCookie, setCookie: setFormStateCookie } = useCookies(
    "main-form",
    ""
  );

  const {
    mutation: sendFormQuestions,
    isPending,
    isSuccess,
  } = useSendFormQuestions();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    sendFormQuestions(data);

    if (isSuccess) {
      setFormStateCookie("true", 1);
    }
  });

  if (isSuccess || formStateCookie === "true") {
    return <FormSendCompleted title="Данные успешно отправлены" />;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-[680px] w-full items-center mx-auto flex flex-col gap-8"
    >
      <Input
        {...register("name")}
        dataTestId="application-form-name"
        error={errors.name?.message}
        placeholder="Имя..."
        name="name"
        type="text"
      />
      <Input
        {...register("telegram")}
        dataTestId="application-form-telegram"
        error={errors.telegram?.message}
        placeholder="Телеграм..."
        name="telegram"
        type="text"
      />
      <Input
        {...register("test")}
        dataTestId="application-form-test"
        error={errors.test?.message}
        placeholder="Название теста..."
        name="test"
        type="text"
      />
      <Input
        {...register("level")}
        dataTestId="application-form-level"
        error={errors.level?.message}
        placeholder="Уровень сложности..."
        name="level"
        type="text"
      />
      <Textarea
        {...register("message")}
        dataTestId="application-form-description"
        placeholder="Дополнительная информация..."
        name="message"
      />
      <Button
        dataTestId="application-form-button"
        type="submit"
        disabled={isPending}
        className="px-8 py-2 text-lg"
      >
        {isPending ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
};
