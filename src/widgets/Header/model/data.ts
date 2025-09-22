import { internalPath } from "@/shared/routes";

export const navigation = [
  {
    text: "Обо мне",
    soon: true,
    link: internalPath.about,
  },
  {
    text: "Проекты",
    soon: true,
    link: internalPath.projects,
  },
  {
    text: "Посты",
    soon: true,
    link: internalPath.posts,
  },
  {
    text: "Контакты",
    soon: true,
    link: internalPath.contacts,
  },
  {
    text: "Менторинг",
    soon: true,
    link: internalPath.mentoring,
  },
] as const;
