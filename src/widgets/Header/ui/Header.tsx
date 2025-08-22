"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, BurgerButton } from "@/shared/ui";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useBodyScrollLock } from "@/shared/hooks";

export const Header = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  useBodyScrollLock(isMenuOpen);

  return (
    <header className="border-b border-[#2A2A2A] bg-[#121212] shadow-md shadow-blue-500/10 fixed top-0 w-full z-50">
      <div className="max-w-[1440px] w-[calc(100%-40px)] mx-auto flex items-center py-8 justify-between">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image src="/logo.png" alt="Логотип" width={130} height={100} />
          </Link>
          <nav className="hidden lg:flex">
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

        <Button className="hidden lg:block">Связаться</Button>
        <BurgerButton
          isOpen={isMenuOpen}
          onClick={() => setIsOpenMenu(!isMenuOpen)}
          menuId=""
        />
      </div>
      <div
        className={twMerge(
          "fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center flex-col transition-all duration-500",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-4">
          {["Обо мне", "Портфолио", "Посты", "Контакты", "Менторинг"].map(
            (item) => (
              <li onClick={() => setIsOpenMenu(false)} key={item}>
                <Link
                  className="rounded-md font-medium px-3 py-2 text-white transition-all opacity-100"
                  href={item}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};
