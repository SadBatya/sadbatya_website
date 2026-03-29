import { Section, Title } from "@/shared/ui";
import Image from "next/image";

export const SectionHero = () => (
  <>
    <Section className="flex flex-col items-center justify-center gap-4">
      <Title>
        Инструкция как помочь улучшить тренажер для подготовки к тестам
      </Title>
      <Image src="/hh.png" height={80} width={80} alt="head hunter logo" />
    </Section>
  </>
);
