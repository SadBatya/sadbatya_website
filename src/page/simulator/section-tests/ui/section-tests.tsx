import { Section, Title, Subtitle } from "@/shared/ui";
import { TestCard } from "@/entities";

interface ITestCard {
  id: number;
  title: string;
  link: string;
  chips: ("Теория" | "Практика")[];
}

export const SectionTests = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-tests`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка загрузки тестов");
  }

  const data: ITestCard[] = await response.json();

  return (
    <Section height="full" className="flex flex-col gap-4">
      <Title tag="h2">Список доступных тестов</Title>
      <Subtitle className="mb-8">Выберите тест из списка</Subtitle>
      <div className="grid md:grid-cols-4 gap-4 items-stretch">
        {data.map(({ title, link, chips, id }) => (
          <TestCard title={title} link={link} chips={chips} key={id} />
        ))}
      </div>
    </Section>
  );
};
