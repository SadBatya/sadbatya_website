import { Section, Title, Subtitle } from "@/shared/ui";
import { tests } from "../model/data";

import { TestCard } from "@/entities";

export const SectionTests = () => (
  <Section height="full" className="flex flex-col gap-4">
    <Title tag="h2">Список доступных тестов</Title>
    <Subtitle className="mb-8">Выберите тест из списка</Subtitle>
    <div className="grid grid-cols-4 gap-4 items-stretch">
      {tests.map(({ title, link, id, chips }) => (
        <TestCard title={title} link={link} chips={chips} key={id} />
      ))}
    </div>
  </Section>
);
