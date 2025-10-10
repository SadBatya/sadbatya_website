import { Section, Title, Subtitle, Button } from "@/shared/ui";
import { ProjectCard } from "@/entities";
import { projects } from "@/shared/model/projects";
import { internalPath } from "@/shared/routes";

export const SectionProjects = () => (
  <Section
    height="full"
    id="projects"
    className="flex flex-col items-center gap-4"
  >
    <Title tag="h2">Проекты</Title>
    <Subtitle className="mb-4" size="large">
      Проекты в которых принимал участие
    </Subtitle>
    <div className="flex flex-wrap justify-center items-stretch gap-4 mb-8">
      {projects.slice(0, 6).map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
    <Button
      className="px-4 py-2.5"
      target="_blank"
      href={internalPath.projects}
    >
      Подробнее
    </Button>
  </Section>
);
