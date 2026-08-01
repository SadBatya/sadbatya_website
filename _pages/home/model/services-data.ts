export type ServiceOption = {
  id: string;
  title: string;
  meta: string;
  price: number;
  discount?: number;
  popular?: boolean;
};

export const mentoring: ServiceOption[] = [
  { id: "mock", title: "Mock Interview", meta: "2 часа · разбор и фидбек", price: 5000, discount: 25 },
  { id: "free", title: "Бесплатная консультация", meta: "30 минут · знакомство", price: 0, popular: true },
  { id: "coach", title: "Карьерный коучинг", meta: "Пакет из 4 сессий", price: 12000, discount: 20 },
];

export const building: ServiceOption[] = [
  { id: "landing", title: "Landing Page", meta: "Одностраничник под ключ", price: 35000 },
  { id: "tilda", title: "Сайт на Tilda", meta: "Быстрый запуск", price: 28000 },
  { id: "shop", title: "Интернет-магазин", meta: "21 день · каталог и оплата", price: 99000 },
  { id: "portal", title: "Корпоративный портал", meta: "Роли, интеграции, админка", price: 145000, discount: 12 },
  { id: "design", title: "UI/UX Дизайн", meta: "Прототип и макеты", price: 25000, discount: 15 },
  { id: "support", title: "Техподдержка", meta: "Год сопровождения", price: 40000 },
  { id: "seo", title: "SEO-продвижение", meta: "Аудит и рост трафика", price: 28000 },
  { id: "ai", title: "AI Чат-боты", meta: "Автоматизация продаж", price: 22000, discount: 10 },
];

export const allServices = [...mentoring, ...building];
