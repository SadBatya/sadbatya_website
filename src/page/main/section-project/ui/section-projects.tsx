import { Section, Title, Subtitle } from "@/shared/ui";
import { ProjectCard } from "@/entities";
import { projects } from "@/shared/model/projects";

export const SectionProjects = () => (
  <Section height="full" id="projects">
    <Title className="mb-4" tag="h2">
      Проекты
    </Title>
    <Subtitle className="mb-8" size="large">
      Проекты в которых принимал участие
    </Subtitle>
    <div className="flex flex-wrap justify-center items-center gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  </Section>
);
