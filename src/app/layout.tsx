import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty app built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        {children}
      </body>
    </html>
  );
}
