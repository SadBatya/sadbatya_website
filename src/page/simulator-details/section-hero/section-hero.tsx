"use client";

import { Section, Title, Tabs, Container, LinkButton } from "@/shared/ui";
import { useQueryState } from "nuqs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { testsHh } from "@/shared/model/tests-hh";
import { type Level } from "@/shared/lib";
import { useGetCurrentTestDescription } from "@/shared/api/hooks";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const SectionHero = () => {
  const pathname = usePathname();
  const params = useParams()
  const searchParams = useSearchParams()

  const {data} = useGetCurrentTestDescription(params.slug as string, searchParams.get('level') as Level)

  console.log(data)
  
  const currentTestName = pathname.split("/")[2];

  const [level, setLevel] = useQueryState("level", {
    defaultValue: "base",
  });

  const tabs = [
    {
      title: "Базовый",
      onClick: () => setLevel("EASY"),
    },
    {
      title: "Средний",
      onClick: () => setLevel("MEDIUM"),
    },
    {
      title: "Продвинутый",
      onClick: () => setLevel("HARD"),
    },
  ];

  const changeLevelTitle = (level: string) => {
    switch (level) {
      case "EASY":
        return "Базовый";
      case "MEDIUM":
        return "Средний";
      case "HARD":
        return "Продвинутый";
      default:
        return "Базовый";
    }
  };

  const currentTestInfo = testsHh[currentTestName];
  const curentTestLevel =
    testsHh[currentTestName].levels[level as Level];

  return (
    <Section className="flex flex-col gap-4 h-full md:h-dvh items-start py-10">
      <Title>{currentTestInfo.title}</Title>
      <Tabs tabs={tabs} query={changeLevelTitle(level)} />
      <p className="rounded-md bg-white/10 p-4 max-w-2xl">
        {currentTestInfo.description}
      </p>
      <Container className="max-w-2xl w-full flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Image src="/timer.svg" alt="timer" width={24} height={24} />
          {curentTestLevel.time} минут
        </span>
        <span className="flex items-center gap-2">
          <Image src="/list.svg" alt="list" width={24} height={24} />
          {curentTestLevel.count} вопросов
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
        className="px-4 py-2 mb-8 mx-auto md:mx-0"
      >
        Начать тест
      </LinkButton>
    </Section>
  );
};
