import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const ubuntu = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "Admin panel",
  description: "My blog admin panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
