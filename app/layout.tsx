import type { Metadata } from "next";
import "./globals.css";

import { Be_Vietnam_Pro } from "next/font/google";

import Hero from "@/components/hero";
import MainCard from "@/components/main-card";
import classNames from "classnames";

const inter = Be_Vietnam_Pro({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "World Ranks",
  description: "Basic data about countries around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames('min-h-screen flex flex-col', inter.className)}>
        <Hero />
        <div className="mx-10 bg-inherit flex-grow flex flex-col">
          <MainCard>{children}</MainCard>
        </div>
      </body>
    </html>
  );
}
