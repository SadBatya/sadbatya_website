import { Section } from "@/shared/ui";
import { Accordion } from "@mantine/core";

export const SectionFaqs = () => (
  <Section>
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Control>Вопрос 1</Accordion.Control>
        <Accordion.Panel>Ответ 1</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Section>
);
