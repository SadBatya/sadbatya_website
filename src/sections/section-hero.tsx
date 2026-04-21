import style from "./section-hero.module.css";
import { Title, Button } from "@mantine/core";
import { PiBriefcase, PiHandshakeFill } from "react-icons/pi";
import { Fragment } from "react/jsx-runtime";
import { Socials, Section } from "@/shared/ui";

export const SectionHero = () => (
  <Section className={style.section}>
    <Title size="h1">Привет</Title>
    <div className={style.buttons}>
      <Button
        variant="light"
        rightSection={<PiBriefcase />}
        className={style.button}
      >
        Предложить работу
      </Button>
      <Button className={style.button} rightSection={<PiHandshakeFill />}>
        Менторство
      </Button>
    </div>
    <div className={style.results}>
      {[
        {
          value: "10+",
          label: "Лет опыта",
        },
        {
          value: "50+",
          label: "Проектов",
        },
        {
          value: "100+",
          label: "Клиентов",
        },
      ].map(({ value, label }, index) => (
        <Fragment key={index}>
          <div className={style.result}>
            <Title size="h2">{value}</Title>
            <p>{label}</p>
          </div>
          {index < 2 && <span className={style.splitter} />}
        </Fragment>
      ))}
    </div>
    <Socials />
  </Section>
);
