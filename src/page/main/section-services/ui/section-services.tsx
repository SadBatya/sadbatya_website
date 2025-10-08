import { Section, Title, Subtitle } from "@/shared/ui";
import { ServicesCalculator } from "@/widgets";
import { ServiceProvider } from "../context/Provider";

export const SectionServices = () => (
  <Section height="full" id="services">
    <Title className="mb-4" tag="h2">
      Список услуг
    </Title>
    <Subtitle className="mb-8">
      Выберите опции чтобы рассчитать стоимость
    </Subtitle>
    <ServiceProvider>
      <ServicesCalculator />
    </ServiceProvider>
  </Section>
);
