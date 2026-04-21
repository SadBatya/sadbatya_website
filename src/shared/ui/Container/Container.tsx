import { Container as MantineContainer } from "@mantine/core";
import style from "./Container.module.css";

export const Container = (
  props: React.ComponentProps<typeof MantineContainer>,
) => <MantineContainer className={style.container} {...props} />;
