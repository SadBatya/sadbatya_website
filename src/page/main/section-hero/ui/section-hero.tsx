import { Section, TypedText } from "@/shared";
import { WORDS } from "../model/data";

export const SectionHero = () => {
  return (
    <Section className="h-screen w-screen flex flex-col items-center justify-center">
      <TypedText
        className="text-[38px] italic font-sans lg:text-[48px]"
        wrapper="h1"
        words={WORDS}
      />
      {/* <p className="text-[20px] font-geist">

      </p> */}
    </Section>
  );
};
