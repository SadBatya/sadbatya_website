import { NavLink } from "react-router";
import style from "./Header.module.css";
import { Logo } from "@/shared/ui";
import { Button } from "@mantine/core";

export const Header = () => (
  <header className={style.header}>
    <Logo />
    <NavLink to="/">Главная</NavLink>
    <NavLink to="/about">Обо мне</NavLink>
    <NavLink to="/contacts">Контакты</NavLink>
    <NavLink to="/portfolio">Портфолио</NavLink>
    <NavLink to="/blog">Блог</NavLink>
    <Button variant="gradient">Связаться</Button>
  </header>
);
