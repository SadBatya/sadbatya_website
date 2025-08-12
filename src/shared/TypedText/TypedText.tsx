"use client";
import { TypeAnimation } from "react-type-animation";

interface Props {
  words: (string | number)[];
  className?: string;
  wrapper:
    | "p"
    | "div"
    | "span"
    | "strong"
    | "a"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "b"
    | undefined;
}

export const TypedText = ({ words, className, wrapper }: Props) => (
  <TypeAnimation
    className={className}
    sequence={words}
    wrapper={wrapper}
    cursor={true}
    repeat={Infinity}
    speed={10}
    deletionSpeed={10}
  />
);
