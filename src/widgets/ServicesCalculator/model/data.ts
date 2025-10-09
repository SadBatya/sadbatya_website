import { type IServiceCard } from "@/shared/types";

interface IServices {
  mentoring: IServiceCard[];
  services: IServiceCard[];
}

export const services: IServices = {
  services: [
    {
      id: 1,
      title: "Разработка Landing Page • Дизайн + Разработка",
      subtitle:
        "Профессиональный лендинг с конверсией до 15%. Адаптивный дизайн, SEO-оптимизация и интеграция аналитики",
      price: 35000,
      discount: null,
      isPopular: true,
      perHour: false,
    },
    {
      id: 2,
      title: "Сайт на Tilda • Бизнес-решения",
      subtitle:
        "Готовый сайт за 7 дней с системой управления контентом и формой сбора заявок",
      price: 28000,
      discount: null,
      isPopular: true,
      perHour: false,
    },
    {
      id: 3,
      title: "Интернет-магазин • Полный цикл",
      subtitle:
        "E-commerce решение с CRM, платежными системами и мобильной адаптацией. Срок реализации - 21 день",
      price: 99000,
      discount: null,
      isPopular: true,
      perHour: false,
    },
    {
      id: 4,
      title: "Корпоративный портал • Бизнес-решение",
      subtitle:
        "Многофункциональная платформа с админ-панелью, системой управления товарами и аналитикой продаж",
      price: 145000,
      discount: 12,
      isPopular: true,
      perHour: false,
    },
    {
      id: 5,
      title: "UI/UX Дизайн • Прототипирование",
      subtitle:
        "Создание интуитивного интерфейса с пользовательскими сценариями и дизайн-системой в Figma",
      price: 25000,
      discount: 15,
      isPopular: false,
      perHour: false,
    },
    {
      id: 6,
      title: "Техническая поддержка • Доработки",
      subtitle:
        "Оптимизация и расширение функционала существующих проектов. Гарантия качества кода",
      price: 40000,
      discount: null,
      isPopular: false,
      perHour: false,
    },
    {
      id: 7,
      title: "SEO-продвижение • Комплексный подход",
      subtitle:
        "Технический аудит, семантика, мета-теги и ускорение загрузки. Рост трафика через 30 дней",
      price: 28000,
      discount: null,
      isPopular: true,
      perHour: false,
    },
    {
      id: 8,
      title: "AI Чат-боты • Автоматизация продаж",
      subtitle:
        "Умный бот с интеграцией в мессенджеры и CRM. Обработка до 95% типовых запросов",
      price: 22000,
      discount: 10,
      isPopular: true,
      perHour: false,
    },
  ],
  mentoring: [
    {
      id: 11,
      title: "Mock Interview • 2 часа",
      subtitle:
        "Полноценное собеседование. Теория + лайвкодинг. Программа подбирается в зависимости от вашего грейда",
      price: 5000,
      discount: 25,
      isPopular: false,
      perHour: false,
    },
    {
      id: 12,
      title: "Бесплатная консультация • 30 мин",
      subtitle: "Отвечу на самые волнующие вопросы про айти и карьеру",
      price: null,
      discount: null,
      isPopular: true,
      perHour: false,
    },
    {
      id: 13,
      title: "Карьерный коучинг • Пакет 4 сессии",
      subtitle:
        "Комплексная подготовка к поиску работы: резюме, портфолио, собеседования и переговоры о зарплате",
      price: 12000,
      discount: 20,
      isPopular: true,
      perHour: false,
    },
  ],
};
