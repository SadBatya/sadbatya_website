import { Section, Title, Button, StackIcons } from "@/shared/ui";

export const SectionAbout = () => (
  <Section height="full" className="flex flex-col max-w-[1440px] items-center">
    <Title tag="h2" className="text-center font-semibold mb-12 lg:mb-24">
      Обо мне
    </Title>
    <div className="flex w-full flex-col lg:flex-row justify-between mb-16 gap-12 items-center">
      <ul className="flex flex-col gap-4 text-lg max-w-[1200px]">
        <li className="flex items-start gap-3">
          <span className="text-emerald-500">✓</span>
          <span>
            <strong>5+ лет коммерческой разработки</strong>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-emerald-500">✓</span>
          <span>
            Опыт работы с <strong>Enterprise-проектами</strong> (миллионы
            пользователей) и быстрая адаптация в стартапах
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-emerald-500">✓</span>
          <span>
            Специализация: <strong>высоконагруженные интерфейсы</strong>,
            оптимизация производительности и UX
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-emerald-500">✓</span>
          <span>
            <strong>Полный цикл разработки</strong> — от проектирования
            архитектуры до CI/CD и мониторинга
          </span>
        </li>
      </ul>
      <StackIcons />
    </div>
    <Button className="px-4 py-2.5">Подробнее</Button>
  </Section>
);
