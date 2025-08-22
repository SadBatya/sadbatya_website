import { twMerge } from "tailwind-merge";
import style from "./BurgerButton.module.css";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  menuId: string;
  className?: string;
}

export const BurgerButton = ({ isOpen, menuId, onClick, className }: Props) => (
  <button
    className={twMerge(
      "flex lg:hidden h-[32px] w-[40px] z-[60] shrink-0 flex-col items-center justify-center overflow-hidden rounded-md transition-colors duration-300",
      className
    )}
    aria-expanded={isOpen}
    aria-controls={menuId}
    onClick={onClick}
  >
    <span className="sr-only">{isOpen ? "Закрыть" : "Открыть"} меню</span>
    <svg
      className={`${style.ham} ${style.hamRotate} ${style.ham1} ${
        isOpen ? style.active : ""
      }`}
      viewBox="0 0 100 100"
    >
      <path
        className={`${style.line} ${style.top}`}
        d={
          (isOpen ? "m 30,33 h 40" : "m 20,33 h 60") +
          " c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        }
      />
      <path
        className={style.line}
        d={isOpen ? "m 30,50 h 40" : "m 20,50 h 60"}
      />
      <path
        className={`${style.line} ${style.bottom}`}
        d={
          (isOpen ? "m 30,67 h 40" : "m 20,67 h 60") +
          " c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        }
      />
    </svg>
  </button>
);
