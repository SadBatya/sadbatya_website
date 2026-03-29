import Link from "next/link";
import { externalPath } from "@/shared/routes";

export const inctruction = [
  {
    title: (
      <>
        Заходите на платформу{" "}
        <Link
          target="_blank"
          className="hover:text-red-900 underline transition-all duration-500"
          href={externalPath.hh}
        >
          hh
        </Link>
      </>
    ),
    subtitle: (
      <>
        Создаете аккаунт и выбирайте раздел{" "}
        <Link target="_blank" href={externalPath.hhTests}>
          подтверждения навыков
        </Link>
      </>
    ),
    img: "/improve/img-1.webp",
  },
  {
    title: "Выбираете тест",
    subtitle:
      "Любой тест из предложенный на платформе. Обязательно надо запомнить название теста и уровень сложности",
    img: "/improve/img-2.webp",
  },
  {
    title: "Записывайте список вопросов с вариантами ответов",
    subtitle:
      "Можно сделать запись экрана или сфотографировать на телефон. Важно, чтобы все вопросы и варианты ответов было четко видно",
    img: "/improve/img-3.webp",
  },
  {
    title: "Заполняете форму",
    subtitle:
      "В описание обязательно укажите что есть база вопросов и я с вами свяжусь в телеграм",
    img: "/improve/img-4.webp",
  },
] as const;
