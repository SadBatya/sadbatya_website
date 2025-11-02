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
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";
import { internalPath } from "@/shared/routes";
import {
  useGetQuestions,
  useGetCurrentTestDescription,
} from "@/shared/api/hooks";
import { type Level } from "@/shared/lib";

export const SectionTest = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finishTest, setFinishTest] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data: testAbout, isLoading: testAboutLoading } =
    useGetCurrentTestDescription(
      params.slug as string,
      searchParams.get("level") as Level
    );

  const { data: questions, isLoading: questionsLoading } = useGetQuestions(
    params.slug as string,
    searchParams.get("level") as Level,
    5
  );

  console.log(questions, "questions");
  console.log(testAbout, "test about");

  const pathname = usePathname();

  const test = testsHh[pathname.split("/")[2]];

  const progress = (currentQuestion + 1) / testAbout?.questionCount;

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

  if (testAboutLoading && questionsLoading) {
    return <div>Идет загрузка тестов...</div>;
  }

  if (finishTest) {
    return (
      <Section className="flex flex-col gap-8 md:gap-4 items-center justify-center">
        <Title tag="h2">Тест завершен</Title>
        <Subtitle className="text-xl">
          Ваш результат: {answers.filter((answer) => answer).length} из{" "}
          {testAbout?.questionCount}
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
          {questions?.length > 0 && questions[currentQuestion]?.question}
        </Title>
        <ul className="flex flex-col gap-4">
          {questions?.length > 0 &&
            questions[currentQuestion]?.answers.map(
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
                testAbout?.questionCount
              }
            />
            Всего осталось:{" "}
            <Timer
              pause={isOpenModal}
              minutes={testAbout?.time || 0}
              onTimeUp={() => setFinishTest(true)}
            />
          </Container>
          {/* TODO: Изменить условный рендеринг */}
          {currentQuestion === testAbout?.questionCount ? (
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
                disabled={currentQuestion === testAbout?.questionCount}
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
