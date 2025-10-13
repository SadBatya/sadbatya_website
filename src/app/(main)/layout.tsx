import { Header, Footer, ProgressBar } from "@/widgets";

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
      <Footer />
    </>
  );
}
