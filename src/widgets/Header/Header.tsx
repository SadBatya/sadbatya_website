import { NavLink } from "react-router";
import style from "./Header.module.css";
import { Logo } from "@/shared/ui";
import { Button } from "@mantine/core";

export const Header = () => (
  <header className={style.header}>
    <Logo />
    <div className={style.links}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/about">Обо мне</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
      <NavLink to="/portfolio">Портфолио</NavLink>
      <NavLink to="/blog">Блог</NavLink>
      <NavLink to="/клавиатуры">Клавиатуры</NavLink>
    </div>
    <Button variant="gradient">Связаться</Button>
  </header>
);
