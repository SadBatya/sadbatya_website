import githubIcon from "@/assets/github.svg";
import telegramIcon from "@/assets/telegram.svg";
import style from "./Socials.module.css";
import { Link } from "react-router";
import { EXTERNAL_PATH } from "@/shared/routes";

export const Socials = () => {
  return (
    <div className={style.socials_icons}>
      <Link to={EXTERNAL_PATH.github}>
        <img className={style.social_icon} src={githubIcon} alt="GitHub" />
      </Link>
      <Link to={EXTERNAL_PATH.telegram}>
        <img className={style.social_icon} src={telegramIcon} alt="Telegram" />
      </Link>
    </div>
  );
};
