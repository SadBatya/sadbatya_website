import { Header, Footer, ProgressBar, ScrollButton } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <ScrollButton />
      <Footer />
    </>
  );
}
