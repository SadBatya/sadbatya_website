"use client";

import { Section, Title, Button, Container, Chip } from "@/shared/ui";
import { ProgressBar } from "@/widgets";
import { TestVariantCard } from "@/entities";
import { testQuestions } from "../model/data";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";

export const SectionTest = () => {
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const aswers = [];

  const pathname = usePathname();

  const [level] = useQueryState("level", {
    defaultValue: "base",
  });

  const test = testQuestions[pathname.split("/")[2]];
  const currentLevelTest = test[level as "base" | "medium" | "advanced"];

  const progress = currentQuestion + 1 / currentLevelTest.length;

  return (
    <Section className="flex flex-col justify-between py-5">
      <div className="flex items-center justify-between">
        <Title tag="h2">{test.title}</Title>
        <Button className="px-4 py-2">Завершить</Button>
      </div>
      <div className="flex flex-col gap-4">
        <Title tag="h4">{currentLevelTest[currentQuestion].question}</Title>
        <ul className="flex flex-col gap-4">
          {currentLevelTest[currentQuestion].answers.map(
            ({ answer }, index) => (
              <TestVariantCard
                className={
                  currentAnswer === index
                    ? "border-white/80 scale-101 bg-white/10"
                    : ""
                }
                key={index}
                text={answer}
                onClick={() => setCurrentAnswer(index)}
              />
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <ProgressBar
          className="bottom-24 left-0 w-full top-auto"
          value={progress}
        />
        <div className="flex items-center justify-between">
          <Container className="flex items-center gap-4">
            <Chip
              text={
                currentQuestion + 1 + " " + "из" + " " + currentLevelTest.length
              }
            />
            Всего осталось: 10:00
          </Container>
          <div className="flex items-center gap-4">
            <Button
              disabled={currentQuestion === 0}
              className="px-4 py-2"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Предыдущий
            </Button>
            <Button
              disabled={currentQuestion === currentLevelTest.length - 1}
              className="px-4 py-2"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Следующий
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
