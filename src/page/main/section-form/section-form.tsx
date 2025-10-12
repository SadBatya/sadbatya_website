"use client";

import { Section, Title, Subtitle } from "@/shared/ui";
import { SendApplication } from "@/features/send-application";

export const SectionForm = () => (
  <Section height="full" id="form" className="flex flex-col gap-8">
    <Title tag="h2">Оставить заявку</Title>
    <Subtitle>Оставь заявку и я напишу тебе в телеграм в течение дня</Subtitle>
    <SendApplication />
  </Section>
);
