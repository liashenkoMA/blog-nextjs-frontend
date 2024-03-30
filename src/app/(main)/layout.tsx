import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import { StoreProvider } from "../StoreProvider";

const ubuntu = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Мой Блог",
  description: "Мой Блог на Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={ubuntu.className}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
        <ButtonUp />
        <Footer />
      </body>
    </html>
  );
}
