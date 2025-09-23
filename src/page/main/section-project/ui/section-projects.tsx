import { Section, Title, Subtitle } from "@/shared/ui";
import { ProjectCard } from "@/entities";
import { Projects } from "@/shared/model/projects";

export const SectionProjects = () => (
  <Section height="full">
    <Title className="mb-4" tag="h2">
      Проекты
    </Title>
    <Subtitle className="mb-8" size="large">
      Проекты в которых принимал участие
    </Subtitle>
    <div className="flex flex-wrap justify-center items-center gap-4">
      {Projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  </Section>
);
