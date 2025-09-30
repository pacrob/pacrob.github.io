export const metadata = {
  title: "Paul Robinson — Portfolio",
  description: "Projects and experience of Paul Robinson (pacrob).",
};

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Page from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200">
        <div className="min-h-dvh lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          <Sidebar />
          <main className="px-6 py-10 lg:ml-[280px] lg:px-12">{children}</main>
        </div>
        <div>
          <Page />
        </div>
      </body>
    </html>
  );
}
