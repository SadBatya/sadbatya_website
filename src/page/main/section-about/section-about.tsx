import { Section, Title } from "@/shared/ui";
import Image from "next/image";
import { icons } from "./model/icons";

export const SectionAbout = () => (
  <Section>
    <Title tag="h2" className="text-center font-semibold mb-12 lg:mb-24">
      Обо мне
    </Title>
    <div className="flex justify-between gap-12 items-center">
      <ul className="flex flex-col gap-4 text-lg">
        <li className="flex items-start gap-3">
          <span className="text-emerald-500">✓</span>
          <span>
            <strong>5+ лет коммерческой разработки</strong> на стеке
            React/Next.js
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
      <div className="flex gap-4 flex-wrap">
        {icons.map((icon) => (
          <Image key={icon} src={icon} alt="" width={50} height={50} />
        ))}
      </div>
    </div>
  </Section>
);
