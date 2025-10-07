import { projects } from "@/shared/model";
import { sections } from "@/shared/routes";

import { Section, Title, Subtitle, Badge, Button } from "@/shared/ui";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = projects[Number((await params).slug)];

  return (
    <Section className="flex items-start xl:items-center justify-center flex-col xl:flex-row gap-8">
      <Image src={project.img} alt="project image" width={640} height={480} />
      <div className="flex flex-col gap-4 items-start">
        <Title>{project.title}</Title>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, index) => (
            <Badge key={index} text={tag} />
          ))}
        </div>
        <Subtitle className="text-left mb-8">{project.descriptions}</Subtitle>
        <div className="flex xl:items-center flex-col gap-10 xl:flex-row xl:gap-4">
          <Button
            target="_blank"
            className="px-8 py-4 text-xl"
            href={project.link}
          >
            Перейти на сайт
          </Button>
          <Button className="px-8 py-4 text-xl" href={sections.projects}>
            Вернуться к проектам
          </Button>
        </div>
      </div>
    </Section>
  );
}
