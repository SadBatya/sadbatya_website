import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared";

export const Header = () => (
  <header className="border-b border-[#2A2A2A] bg-[#121212] shadow-md shadow-blue-500/10 fixed top-0 w-full z-50">
    <div className="max-w-[1440px] w-[calc(100%-40px)] mx-auto flex items-center py-8 justify-between">
      <div className="flex items-center gap-16">
        <div>
          <Image src="/logo.png" alt="Логотип" width={130} height={100} />
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            {["Обо мне", "Портфолио", "Посты", "Контакты", "Менторинг"].map(
              (item) => (
                <li key={item}>
                  <Link
                    className="text-[#EAEAEA] opacity-50 rounded-md font-medium px-3 py-2 hover:text-white transition-all hover:opacity-100"
                    href={item}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      <Button>Связаться</Button>
    </div>
  </header>
);
