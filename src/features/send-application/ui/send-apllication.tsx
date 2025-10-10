import { Textarea, Input, Button, Section } from "@/shared/ui";
import { externalPath } from "@/shared/routes";
import { useCookies } from "@/shared/hooks";
import { useForm } from "react-hook-form";
import { zodSсhemes } from "@/shared/zod-schemes";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendMessage } from "@/shared/api/hooks";
import Image from "next/image";

const schema = z.object({
  name: zodSсhemes.name,
  telegram: zodSсhemes.telegram,
  textarea: zodSсhemes.textarea,
});

export const SendApplication = () => {
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
      <Button type="submit" disabled={isPending} className="px-8 py-2 text-lg">
        {isPending ? "Отправка..." : "Отправить"}
      </Button>
    </form>
  );
};
