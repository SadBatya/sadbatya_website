import { Section } from "@/shared/ui";
import { Title, Badge, Text } from "@mantine/core";
import style from "./section-project.module.css";
import fineTheJobImg from "@/assets/projects/findTheJob.webp";

export const SectionProject = () => (
  <Section className={style.section}>
    <div>
      <Title className={style.title}>Проекты</Title>
      <Title className={style.subtitle} size="h3">
        В которых принимал активное участие
      </Title>
    </div>
    <div className={style.projects}>
      <div className={style.project_card}>
        <img className={style.project_img} src={fineTheJobImg} alt="" />
        <div className={style.project_info}>
          <div className={style.badges}>
            <Badge color="blue">CRM</Badge>
            <Badge color="green">AI</Badge>
            <Badge color="red">Hiring</Badge>
          </div>
          <Title size="h4">Find The Job</Title>
          <Text>Ai CRM система для быстрого подбора кандидатов</Text>
        </div>
      </div>
    </div>
  </Section>
);
