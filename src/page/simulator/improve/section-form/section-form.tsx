import { Section, Title } from "@/shared/ui";
import { SendQuestions } from "@/features/send-questions";

export const SectionForm = () => (
  <Section className="flex flex-col gap-8">
    <Title>Заполните данную форму</Title>
    <SendQuestions />
  </Section>
);
