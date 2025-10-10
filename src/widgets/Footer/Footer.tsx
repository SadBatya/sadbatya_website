import Link from "next/link";
import { externalPath } from "@/shared/routes";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="border-t border-[#2A2A2A] bg-[#121212] w-full">
      <div className="max-w-[1440px] w-[calc(100%-40px)] flex-col mx-auto gap-4 flex items-center py-8 justify-between">
        <div>
          Дизайн и разработка
          <Link href={externalPath.github}> Sadbatya</Link>
        </div>
        <p className="text-sm text-white/50">
          Все права защищены {date.getFullYear()} ©{" "}
        </p>
      </div>
    </footer>
  );
};
