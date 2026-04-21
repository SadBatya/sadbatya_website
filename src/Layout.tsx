import "@mantine/core/styles.css";
import "./index.css";
import { Header } from "./widgets";
import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";
import { Container } from "./shared/ui";
import { Outlet } from "react-router";

const myColor: MantineColorsTuple = [
  "#f1f4fe",
  "#e4e6ed",
  "#c8cad3",
  "#a9adb9",
  "#9094a3",
  "#7f8496",
  "#777c91",
  "#63687c",
  "#595e72",
  "#4a5167",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
});

export const Layout = () => (
  <MantineProvider theme={theme}>
    <Container>
      <Header />
      <Outlet />
    </Container>
  </MantineProvider>
);
