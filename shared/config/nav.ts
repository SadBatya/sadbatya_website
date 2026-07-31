export type NavLink = {
  label: string;
  href: string;
  soon?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Обо мне", href: "#about" },
  { label: "Проекты", href: "#projects" },
  { label: "Менторинг", href: "#services" },
  { label: "Посты", href: "#posts", soon: true },
  { label: "Контакты", href: "#contact" },
];

export const externalLinks = {
  github: "https://github.com",
  telegram: "https://t.me",
};
