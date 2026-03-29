"use client";

import {
  Section,
  Title,
  Tabs,
  Container,
  LinkButton,
  Skeleton,
} from "@/shared/ui";
import { useQueryState } from "nuqs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { type Level } from "@/shared/lib";
import { useGetCurrentTestDescription } from "@/shared/api/hooks";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const SectionHero = () => {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const { data: test, isLoading } = useGetCurrentTestDescription(
    params.slug as string,
    (searchParams.get("level") as Level) ?? "EASY"
  );

  const [level, setLevel] = useQueryState("level", {
    defaultValue: "EASY",
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

  if (isLoading) {
    return (
      <Section className="flex flex-col gap-4 h-full md:h-dvh items-start py-10">
        <Skeleton className="h-[72px] w-48" />
        <Tabs tabs={tabs} query={changeLevelTitle(level)} />
        <p className="rounded-md bg-white/10 p-4 max-w-2xl">
          Данный тест можно проходить несколько раз. Старайтесь в первую очередь
          проверить свои знания. Только после начинать гуглить, использовать
          нейронки.
        </p>
        <Container className="max-w-2xl w-full flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Image src="/timer.svg" alt="timer" width={24} height={24} />
            <Skeleton className="size-2" />
            минут
          </span>
          <span className="flex items-center gap-2">
            <Image src="/list.svg" alt="list" width={24} height={24} />
            <Skeleton className="size-2" />
            вопросов
          </span>
        </Container>
        <Container className="max-w-2xl w-full flex flex-col gap-4 mb-8">
          <Title tag="h4">Содержание</Title>
          <ul className="flex flex-col gap-2 list-disc list-inside">
            {Array.from({ length: 3 })?.map((_, index) => (
              <Skeleton key={index} className="w-48" />
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
  }

  return (
    <Section className="flex flex-col gap-4 h-full md:h-dvh items-start py-10">
      <Title>{test?.testPage.title.toUpperCase()}</Title>
      <Tabs tabs={tabs} query={changeLevelTitle(level)} />
      <p className="rounded-md bg-white/10 p-4 max-w-2xl">
        Данный тест можно проходить несколько раз. Старайтесь в первую очередь
        проверить свои знания. Только после начинать гуглить, использовать
        нейронки.
      </p>
      <Container className="max-w-2xl w-full flex items-center gap-4">
        <span className="flex items-center gap-2">
          <Image src="/timer.svg" alt="timer" width={24} height={24} />
          {test?.time} минут
        </span>
        <span className="flex items-center gap-2">
          <Image src="/list.svg" alt="list" width={24} height={24} />
          {test?.questionCount} вопросов
        </span>
      </Container>
      <Container className="max-w-2xl w-full flex flex-col gap-4 mb-8">
        <Title tag="h4">Содержание</Title>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          {test?.about.map((item, index) => (
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
