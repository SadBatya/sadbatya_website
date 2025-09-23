import { Title, Badge, Subtitle } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  descriptions: string;
  tags: string[];
  link: string;
}

export const ProjectCard = ({
  img,
  title,
  descriptions,
  tags,
  link,
}: Props) => (
  <Link
    href={link}
    className="flex flex-col border border-white/30 pb-4 hover:scale-101 transition-all duration-300 hover:border-white/80 max-w-[360px] bg-black w-full gap-4 rounded-md group overflow-hidden cursor-pointer"
  >
    <Image
      src={img}
      alt={title}
      width={360}
      height={270}
      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
    />

    <div className="flex flex-col gap-2 px-4">
      <div className="flex items-center gap-1">
        {tags.splice(0, 3).map((tag, index) => (
          <Badge key={index} text={tag} />
        ))}
      </div>
      <Title className="font-semibold" tag="h4">
        {title}
      </Title>
      <Subtitle className="text-left">{descriptions}</Subtitle>
    </div>
  </Link>
);
