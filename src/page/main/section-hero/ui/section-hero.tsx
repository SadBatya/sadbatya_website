import { Section, TypedText } from "@/shared";
import { WORDS, socials } from "../model/data";
import Link from "next/link";
import Image from "next/image";

export const SectionHero = () => {
  return (
    <Section className="h-screen w-screen flex flex-col items-center justify-center">
      <TypedText
        className="text-[38px] italic font-sans mb-8 lg:text-[48px]"
        wrapper="h1"
        words={WORDS}
      />
      <div className="flex items-center gap-4">
        {socials.map(({ icon, link }, index) => (
          <Link
            className="transition-all opacity-50 hover:opacity-100"
            href={link}
            key={index}
          >
            <Image src={icon} alt="" width={32} height={32} />
          </Link>
        ))}
      </div>
    </Section>
  );
};
