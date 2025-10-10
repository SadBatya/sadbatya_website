"use client";

import { Section, Title } from "@/shared/ui";
import { SendApplication } from "@/features/send-application";

export const SectionForm = () => (
  <Section height="full" id="form">
    <Title tag="h2" className="mb-16 lg:mb-20">
      Связаться со мной
    </Title>
    <SendApplication />
  </Section>
);
