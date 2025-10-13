"use client";

import { Section, Title, Tabs, Container, LinkButton } from "@/shared/ui";
import { useQueryState } from "nuqs";
import Image from "next/image";
import { testDetails } from "../model/data";
import { usePathname } from "next/navigation";

export const SectionHero = () => {
  const pathname = usePathname();

  const currentTestName = pathname.split("/")[2];

  const [level, setLevel] = useQueryState("level", {
    defaultValue: "base",
  });

  const tabs = [
    {
      title: "Базовый",
      onClick: () => setLevel("base"),
    },
    {
      title: "Средний",
      onClick: () => setLevel("medium"),
    },
    {
      title: "Продвинутый",
      onClick: () => setLevel("advanced"),
    },
  ];

  const changeLanguageLevel = (level: string) => {
    switch (true) {
      case level === "base":
        return "Базовый";
      case level === "medium":
        return "Средний";
      case level === "advanced":
        return "Продвинутый";
      default:
        return "Базовый";
    }
  };

  const currentTestInfo = testDetails[currentTestName];
  const curentTestLevel =
    testDetails[currentTestName][level as "base" | "medium" | "advanced"];

  return (
    <Section className="flex flex-col gap-4 items-start py-10">
      <Title>{currentTestInfo.title}</Title>
      <Tabs tabs={tabs} query={changeLanguageLevel(level)} />
      <p className="rounded-md bg-white/10 p-4 max-w-2xl">
        {currentTestInfo.description}
      </p>
      <Container className="max-w-2xl w-full flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Image src="/timer.svg" alt="timer" width={24} height={24} />
          {curentTestLevel.time}
        </span>
        <span className="flex items-center gap-2">
          <Image src="/list.svg" alt="list" width={24} height={24} />
          {curentTestLevel.questions}
        </span>
      </Container>
      <Container className="max-w-2xl w-full flex flex-col gap-4 mb-8">
        <Title tag="h4">Содержание</Title>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {curentTestLevel.about.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Container>
      <LinkButton
        href={{
          pathname: pathname + "/run-test",
          query: {
            level: level,
          },
        }}
        className="px-4 py-2 mb-8"
      >
        Начать тест
      </LinkButton>
    </Section>
  );
};
