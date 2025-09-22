import { Section, Title, Button } from "@/shared/ui";
import Image from "next/image";
import { externalPath } from "@/shared/routes";
import { internalPath } from "@/shared/routes";

export default function Page() {
  return (
    <Section className="flex items-center justify-center flex-col gap-8">
      <Title tag="h1" className="font-bold">
        404
      </Title>
      <Title tag="h3">Раздел еще в разработке :)</Title>
      <Image src="/gifs/spongebob.gif" alt="404" width={300} height={100} />
      <Button className="px-4 py-2" href={externalPath.telegramChannel}>
        Перейти в телеграм
      </Button>
      <Button className="px-4 py-2" href={internalPath.home}>
        Вернуться на главную
      </Button>
    </Section>
  );
}
