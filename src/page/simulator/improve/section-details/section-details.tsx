import { Section, Title } from "@/shared/ui";
import { inctruction } from "./model/data";
import Image from "next/image";

export const SectionDetails = () => (
  <Section height="full">
    <Title className="mb-12">Выполните следующие шаги:</Title>
    <ol className="flex gap-8 flex-col justify-between">
      {inctruction.map(({ title, subtitle, img }, index) => (
        <li
          key={index}
          className="flex items-center justify-between even:flex-row-reverse"
        >
          <div className="flex flex-col text-left gap-4">
            <Title tag="h3" className="text-left">
              {index + 1}.
              {title}
            </Title>
            <p className="max-w-2xl">{subtitle}</p>
          </div>
          <Image src={img} alt="" width={400} height={400} />
        </li>
      ))}
    </ol>
  </Section>
);
