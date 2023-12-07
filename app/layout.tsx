import type { Metadata } from "next";
import './globals.css';

import classNames from 'classnames';
import { Be_Vietnam_Pro } from 'next/font/google';

import Hero from '@/components/hero';

const vietnam = Be_Vietnam_Pro({ subsets: ["latin"], weight: "500" });

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
      <body className={classNames('min-h-screen flex flex-col', vietnam.className)}>
        <Hero />
        <div className="mx-10 bg-inherit flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
