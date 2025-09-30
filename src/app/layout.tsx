import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Paul Robinson — Portfolio",
  description: "Projects and experience of Paul Robinson (pacrob).",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white font-sans antialiased text-slate-800 dark:bg-slate-950 dark:text-slate-200`}
      >
        <div className="min-h-dvh lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          <Sidebar />
          <main className="px-6 py-10 lg:ml-[280px] lg:px-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
