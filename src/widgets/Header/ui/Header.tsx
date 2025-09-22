"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, BurgerButton, Badge } from "@/shared/ui";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useBodyScrollLock } from "@/shared/hooks";
import { navigation } from "../model/data";
import { internalPath } from "@/shared/routes";

export const Header = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  useBodyScrollLock(isMenuOpen);

  return (
    <header className="border-b border-[#2A2A2A] bg-[#121212] shadow-md shadow-blue-500/10 fixed top-0 w-full z-50">
      <div className="max-w-[1440px] w-[calc(100%-40px)] mx-auto flex items-center py-8 justify-between">
        <div className="flex items-center gap-16">
          <Link href="/">
            <Image src="/logo.png" alt="Логотип" width={130} height={25} />
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              {navigation.map(({ text, link, soon }, index) => (
                <li key={index}>
                  <Link
                    className="text-[#EAEAEA] flex items-center gap-2 opacity-50 rounded-md font-medium px-3 py-2 hover:text-white transition-all hover:opacity-100"
                    href={link}
                  >
                    {text}
                    {soon === true && <Badge text="Soon" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button href={internalPath.home + "#form"} className="hidden lg:block">
          Связаться
        </Button>
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
          {navigation.map(({ text, soon, link }, index) => (
            <li onClick={() => setIsOpenMenu(false)} key={index}>
              <Link
                className="rounded-md font-medium flex items-center gap-2 px-3 py-2 text-white transition-all opacity-100"
                href={link}
              >
                {text}
                {soon === true && <Badge text="Soon" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
