"use client";
import { Section, Title, Subtitle } from "@/shared/ui";
import { useGetTests } from "@/shared/api/hooks";
import { TestCard } from "@/entities";

export const SectionTests = () => {
  const { data, isLoading, isError } = useGetTests();

  if (isLoading) {
    return (
      <Section height="full" className="flex flex-col gap-4">
        <Title tag="h2">Список доступных тестов</Title>
        <Subtitle className="mb-8">Загрузка...</Subtitle>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section height="full" className="flex flex-col gap-4">
        <Title tag="h2">Список доступных тестов</Title>
        <Subtitle className="mb-8">Ошибка загрузки</Subtitle>
      </Section>
    );
  }

  const tests = data ?? [];

  return (
    <Section height="full" className="flex flex-col gap-4">
      <Title tag="h2">Список доступных тестов</Title>
      <Subtitle className="mb-8">Выберите тест из списка</Subtitle>
      <div className="grid md:grid-cols-4 gap-4 items-stretch">
        {tests.map((item: { id: number; title: string; link: string; chips: string[] }) => (
          <TestCard
            title={item.title}
            link={item.link}
            chips={item.chips as ("Теория" | "Практика")[]}
            key={item.id}
          />
        ))}
      </div>
    </Section>
  );
};
