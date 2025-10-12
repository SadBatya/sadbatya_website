import {
  SectionTimerToast,
  SectionHero,
  SectionAbout,
  SectionProjects,
  SectionServices,
  SectionForm,
} from "@/page";

export default function Home() {
  return (
    <>
      <SectionTimerToast />
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionServices />
      <SectionForm />
    </>
  );
}
