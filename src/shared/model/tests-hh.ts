import { type Level } from "@/shared/lib";

export interface TestAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface TestQuestion {
  question: string;
  answers: TestAnswer[];
}

export interface TestLevel {
  time: number;
  count: number;
  about: string[];
  questions: TestQuestion[];
}

export interface TestLevels {
  EASY: TestLevel;
  MEDIUM: TestLevel;
  HARD: TestLevel;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  link: string;
  chips: ("Теория" | "Практика")[];
  levels: Record<Level, TestLevel>;
}

export interface ITestsData {
  [key: string]: Test;
}

export const testsHh: ITestsData = {
  html: {
    id: 1,
    title: "HTML",
    description:
      "Данный тест можно проходить несколько раз. Старайтесь в первую очередь проверить свои знания. Только после начинать гуглить, использовать нейронки.",
    link: "/html",
    chips: ["Теория"],
    levels: {
      EASY: {
        time: 10,
        count: 10,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
      MEDIUM: {
        time: 18,
        count: 12,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
      HARD: {
        time: 23,
        count: 15,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  css: {
    id: 2,
    title: "CSS",
    description:
      "Данный тест можно проходить несколько раз. Старайтесь в первую очередь проверить свои знания. Только после начинать гуглить, использовать нейронки.",
    link: "/css",
    chips: ["Теория"],
    levels: {
      EASY: {
        time: 10,
        count: 10,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
      MEDIUM: {
        time: 18,
        count: 12,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
      HARD: {
        time: 23,
        count: 15,
        about: [
          "Основные теги",
          "Блочные и строчные элементы",
          "Атрибуты элементов",
        ],
        questions: [
          {
            question: "Что такое HTML?",
            answers: [
              { answer: "Язык разметки гипертекста", isCorrect: true },
              { answer: "Язык программирования", isCorrect: false },
              { answer: "Фреймворк для создания сайтов", isCorrect: false },
              { answer: "База данных", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
};
