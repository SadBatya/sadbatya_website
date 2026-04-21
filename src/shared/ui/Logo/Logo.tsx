import { Link } from "react-router";
import style from "./Logo.module.css";
import { INTERNAL_ROUTES } from "@/shared/routes";

export const Logo = () => (
  <Link to={INTERNAL_ROUTES.home} className={style.logo}>
    SB
  </Link>
);
