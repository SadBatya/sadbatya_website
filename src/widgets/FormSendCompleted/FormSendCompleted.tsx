import Image from "next/image";
import { Button } from "@/shared/ui";
import { externalPath } from "@/shared/routes";

interface Props {
  title?: string;
}

export const FormSendCompleted = ({ title }: Props) => (
  <div id="form" className="flex flex-col gap-8 items-center justify-center">
    <span className="text-white text-center font-semibold uppercase text-2xl">
      {title ?? "Данные успешно отправлены"}
    </span>
    <Image src="/gifs/raccoon.gif" alt="raccoon" width={300} height={300} />
    <div className="flex flex-wrap gap-4 items-center justify-center">
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
      <Button
        href={externalPath.telegramChannel}
        target="_blank"
        className="px-4 py-2 text-lg flex items-center gap-2"
      >
        <Image
          src="/socials-icons/github.svg"
          alt="telegram"
          width={24}
          height={24}
        />
        Мой гитхаб
      </Button>
    </div>
  </div>
);
