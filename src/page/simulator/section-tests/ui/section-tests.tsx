import { Section, Title, Subtitle } from "@/shared/ui";
import { testsHh } from "@/shared/model/tests-hh";

import { TestCard } from "@/entities";

export const SectionTests = () => (
  <Section height="full" className="flex flex-col gap-4">
    <Title tag="h2">Список доступных тестов</Title>
    <Subtitle className="mb-8">Выберите тест из списка</Subtitle>
    <div className="grid md:grid-cols-4 gap-4 items-stretch">
      {Object.values(testsHh).map(({ title, link, id, chips }) => (
        <TestCard title={title} link={link} chips={chips} key={id} />
      ))}
    </div>
  </Section>
);
