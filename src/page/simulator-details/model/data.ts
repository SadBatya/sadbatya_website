interface TestLevel {
  time: string;
  questions: string;
  about: readonly string[];
}

interface TestCategory {
  title: string;
  description: string;
  base: TestLevel;
  medium: TestLevel;
  advanced: TestLevel;
}

interface ITestDetails {
  readonly [key: string]: TestCategory;
}

export const testDetails: ITestDetails = {
  html: {
    title: "HTML",
    description:
      "Данный тест можно проходить несколько раз. Старайтесь в первую очередь проверить свои знания. Только после начинать гуглить, использовать нейронки.",
    base: {
      time: "10 минут",
      questions: "10 вопросов",
      about: [
        "Основные теги",
        "Блочные и строчные элементы",
        "Атрибуты элементов",
      ],
    },
    medium: {
      time: "18 минут",
      questions: "12 вопросов",
      about: ["Доступность", "Валидация", "Мультимедиа"],
    },
    advanced: {
      time: "23 минут",
      questions: "15 вопросов",
      about: [
        "Сложные формы",
        "Accessibility (WCAG)",
        "Web Components (HTML-аспекты)",
      ],
    },
  },
  git: {
    title: "Git",
    description:
      "Данный тест можно проходить несколько раз. Старайтесь в первую очередь проверить свои знания. Только после начинать гуглить, использовать нейронки.",
    base: {
      time: "10 минут",
      questions: "10 вопросов",
      about: ["Принципы работы Git", "Работа с файлами", "Репозитории"],
    },
    medium: {
      time: "10 минут",
      questions: "10 вопросов",
      about: ["Принципы работы Git", "Работа с файлами", "Репозитории"],
    },
    advanced: {
      time: "10 минут",
      questions: "10 вопросов",
      about: ["Принципы работы Git", "Работа с файлами", "Репозитории"],
    },
  },
};
