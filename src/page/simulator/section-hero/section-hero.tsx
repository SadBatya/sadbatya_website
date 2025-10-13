import { Section, Title, Subtitle, Button } from "@/shared/ui";
import Image from "next/image";

export const SectionHero = () => (
  <Section className="h-[calc(100dvh-105px)] w-screen flex flex-col gap-4 items-center justify-center">
    <Title className="flex items-center gap-4">
      Тренажер по навыкам и языкам{" "}
      <Image src="/hh.png" height={60} width={60} alt="head hunter logo" />
    </Title>
    <Subtitle className="text-center text-2xl mb-8">
      Бесплатный тренажер для подготовки к тестам на hh
    </Subtitle>
    <Button href="#test-list" className="text-xl px-4 py-4">
      Перейти к тестам
    </Button>
  </Section>
);
