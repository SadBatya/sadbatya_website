import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "@/_app/providers";
import { Header } from "@/_app/layout/header";
import { ScrollProgress } from "@/_app/layout/scroll-progress";
import "@/_app/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Sadbatya",
  description: "Разработка сайтов, менторинг, обо мне, айти",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <ScrollProgress />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
