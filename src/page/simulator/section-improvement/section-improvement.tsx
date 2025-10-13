import { Title, Subtitle, Section } from "@/shared/ui";
import { SendApplication } from "@/features/send-application";

export const SectionImprovement = () => (
  <Section height="full" className="flex flex-col gap-4">
    <Title tag="h2">Есть вопросы для базы тестов?</Title>
    <Subtitle className="mb-8 text-xl">
      Напиши мне или оставь заявку с текстом{" "}
      <strong>Есть вопросы для базы тестов</strong>
    </Subtitle>
    <SendApplication />
  </Section>
);
