"use client";

import {
  Section,
  Title,
  Button,
  Container,
  Chip,
  Subtitle,
  LinkButton,
  Timer,
} from "@/shared/ui";
import { testsHh } from "@/shared/model/tests-hh";
import { ProgressBar, Modal } from "@/widgets";
import { TestVariantCard } from "@/entities";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { internalPath } from "@/shared/routes";

export const SectionTest = () => {
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finishTest, setFinishTest] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const pathname = usePathname();

  const [level] = useQueryState("level", {
    defaultValue: "base",
  });

  const test = testsHh[pathname.split("/")[2]];
  const currentLevelTest =
    testsHh[pathname.split("/")[2]].levels[
      level as "base" | "medium" | "advanced"
    ];

  const progress = (currentQuestion + 1) / currentLevelTest.questions.length;

  const handleChooseAnswer = (answer: boolean, index: number) => {
    setAnswers((prev) => [...prev.slice(0, currentQuestion), answer]);
    setCurrentAnswer(index);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswer(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setCurrentAnswer(null);
  };

  const handleRepeatTest = () => {
    setFinishTest(false);
    setAnswers([]);
    setCurrentQuestion(0);
    setCurrentAnswer(null);
  };

  if (finishTest) {
    return (
      <Section className="flex flex-col gap-8 md:gap-4 items-center justify-center">
        <Title tag="h2">Тест завершен</Title>
        <Subtitle className="text-xl">
          Ваш результат: {answers.filter((answer) => answer).length} из{" "}
          {currentLevelTest.questions.length}
        </Subtitle>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <Button className="px-4 py-2" onClick={handleRepeatTest}>
            Попробовать снова
          </Button>
          <LinkButton href={internalPath.simulator}>
            Вернуться к списку
          </LinkButton>
        </div>
      </Section>
    );
  }

  return (
    <Section className="flex flex-col justify-between py-5">
      <div className="flex items-center justify-between">
        <Title tag="h2">{test.title}</Title>
        <Button onClick={() => setIsOpenModal(true)}>Завершить</Button>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <Title tag="h4">Вы уверены что хотите завершить тест?</Title>
          <div className="flex items-center gap-4 justify-between">
            <Button
              onClick={() => {
                setFinishTest(true);
                setIsOpenModal(false);
              }}
            >
              Да
            </Button>
            <Button onClick={() => setIsOpenModal(false)}>Нет</Button>
          </div>
        </Modal>
      </div>
      <div className="flex flex-col gap-4">
        <Title tag="h4">
          {currentLevelTest.questions[currentQuestion].question}
        </Title>
        <ul className="flex flex-col gap-4">
          {currentLevelTest.questions[currentQuestion].answers.map(
            ({ answer, isCorrect }, index) => (
              <TestVariantCard
                className={
                  currentAnswer === index
                    ? "border-white/80 scale-101 bg-white/10"
                    : ""
                }
                key={index}
                text={answer}
                onClick={() => handleChooseAnswer(isCorrect, index)}
              />
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <ProgressBar
          className="bottom-32 md:bottom-24 left-0 w-full duration-500 top-auto"
          value={progress}
        />
        <div className="flex items-center flex-wrap gap-4 justify-center md:justify-between">
          <Container className="flex items-center gap-4">
            <Chip
              text={
                currentQuestion +
                1 +
                " " +
                "из" +
                " " +
                currentLevelTest.questions.length
              }
            />
            Всего осталось:{" "}
            <Timer
              minutes={currentLevelTest.time}
              onTimeUp={() => setFinishTest(true)}
            />
          </Container>
          {/* TODO: Изменить условный рендеринг */}
          {currentQuestion === currentLevelTest.questions.length - 1 ? (
            <div className="flex items-center gap-4">
              <Button
                disabled={currentQuestion === 0}
                className="px-4 py-2"
                onClick={handlePreviousQuestion}
              >
                Предыдущий
              </Button>
              <Button className="px-4 py-2" onClick={() => setFinishTest(true)}>
                Завершить
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button
                disabled={currentQuestion === 0}
                className="px-4 py-2"
                onClick={handlePreviousQuestion}
              >
                Предыдущий
              </Button>
              <Button
                disabled={
                  currentQuestion === currentLevelTest.questions.length - 1
                }
                className="px-4 py-2"
                onClick={handleNextQuestion}
              >
                Следующий
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
