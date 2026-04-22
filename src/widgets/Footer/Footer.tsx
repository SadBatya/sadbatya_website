import { Logo, Socials } from "@/shared/ui";
import style from "./Footer.module.css";
import { Link } from "react-router";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export const Footer = () => (
  <div className={style.footer}>
    <div className={style.footer_inner}>
      <Logo />
      <div className={style.links}>
        {links.map(({ link, label }) => (
          <Link to={link}>{label}</Link>
        ))}
      </div>
      <Socials />
    </div>
  </div>
);
