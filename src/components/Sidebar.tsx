"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type SidebarLink = {
  id: string;
  label: string;
};

const SECTION_LINKS: SidebarLink[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "open_source", label: "Open Source" },
  { id: "projects", label: "Projects" },
];

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function Sidebar() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [active, setActive] = useState<string>(SECTION_LINKS[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    )
      return;

    const sections = SECTION_LINKS.map((link) =>
      window.document.getElementById(link.id),
    ).filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((selected, entry) => {
          if (!selected) return entry;
          const selectedTop = (selected.target as HTMLElement).offsetTop;
          const entryTop = (entry.target as HTMLElement).offsetTop;
          return entryTop < selectedTop ? entry : selected;
        });

        if (topMost?.target.id) setActive(topMost.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const nav = useMemo(
    () => (
      <ul className="space-y-2 text-sm">
        {SECTION_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`block py-1.5 hover:underline ${
                active === link.id ? "text-indigo-600 font-medium" : ""
              }`}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ),
    [active],
  );

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:border-r lg:border-slate-200 dark:lg:border-slate-800 lg:py-10">
      <div className="h-full flex flex-col px-6 py-8 lg:px-8 lg:py-10">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">
            Paul Robinson
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            I like to build things
          </p>
        </header>

        <nav className="mt-8">{nav}</nav>
        <div className="flex-1" />

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-sm">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://github.com/pacrob"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pacrob"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:pacrob@proton.me" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="mt-4 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            aria-label="Toggle theme"
          >
            Toggle theme
          </button>
        </div>
      </div>
    </aside>
  );
}
