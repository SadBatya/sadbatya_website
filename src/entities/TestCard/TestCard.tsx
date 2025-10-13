import Link from "next/link";
import { Title, Chip } from "@/shared/ui";
import { internalPath } from "@/shared/routes";

interface Props {
  title: string;
  chips: readonly ("Теория" | "Практика")[];
  link: string;
}

export const TestCard = ({ title, chips, link }: Props) => (
  <Link
    href={internalPath.simulator + link}
    className="rounded-md hover:scale-101 w-full  md:max-w-[360px] h-50 duration-300 flex flex-col gap-4 p-4 border border-white/50 hover:border-red-900 transition-all"
  >
    <Title tag="h4">{title}</Title>
    <div className="flex items-center gap-4 flex-wrap">
      {chips.map((text, index) => (
        <Chip className="text-xs" text={text} key={index} />
      ))}
    </div>
  </Link>
);
