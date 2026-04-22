import style from "./Socials.module.css";
import { Link } from "react-router";
import { EXTERNAL_PATH } from "@/shared/routes";
import { PiInstagramLogo, PiTelegramLogo, PiGithubLogo } from "react-icons/pi";

export const Socials = () => (
  <div className={style.socials_icons}>
    <Link to={EXTERNAL_PATH.instagram}>
      <PiInstagramLogo className={style.social_icon} />
    </Link>
    <Link to={EXTERNAL_PATH.telegram}>
      <PiTelegramLogo className={style.social_icon} />
    </Link>
    <Link to={EXTERNAL_PATH.github}>
      <PiGithubLogo className={style.social_icon} />
    </Link>
  </div>
);
