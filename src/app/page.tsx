const experiences = [
  {
    role: "Senior Software Engineer — Ethereum Foundation",
    period: "2021–2025",
    bullets: [
      "Maintained & modernized 20+ Python libs; standardized CI/CD and LSv testing.",
      "Improved ABI decoding performance & safety; coordinated downstream pinning.",
    ],
  },
  {
    role: "Software Engineer — Seagate Technology",
    period: "2019–2021",
    bullets: [
      "Built Flask services for a security camera platform and containerized backends.",
      "Delivered React/TypeScript features and polished demos for stakeholders.",
    ],
  },
];

const projects = [
  {
    name: "Dynamic SDK Demo",
    href: "https://github.com/pacrob/dynamic-sdk-demo",
    description:
      "Minimal app showing embedded wallet + account abstraction flows.",
    meta: "Repo • Tech: TypeScript, React, Vite",
  },
  {
    name: "Gasless Minting Demo",
    href: "https://github.com/pacrob/gasless-minting",
    description: "ERC‑20/721 minting on Base Sepolia with relaying.",
    meta: "Repo • Tech: Solidity, Python",
  },
  {
    name: "Collab Editor",
    href: "https://github.com/pacrob/collab-editor",
    description: "Realtime doc editing experiment with WebSocket.",
    meta: "Repo • Tech: TypeScript, WebSocket",
  },
];

export default function Page() {
  return (
    <>
      <section id="about" className="max-w-3xl">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
          ABOUT
        </h2>
        <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />
        <p className="mt-6 leading-relaxed text-slate-700 dark:text-slate-300">
          I’m a backend engineer focused on Python, Ethereum, and systems. I
          like clear APIs, strong tests, and boring, reliable infra. Currently
          exploring system design, distributed systems, and practical developer
          tooling. Based in Boulder/Longmont, CO.
        </p>
      </section>

      <section id="experience" className="max-w-3xl mt-16">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
          EXPERIENCE
        </h2>
        <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />

        {experiences.map((experience) => (
          <article key={experience.role} className="mt-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium">{experience.role}</h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {experience.period}
              </span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {experience.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects" className="max-w-3xl mt-16">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
          PROJECTS
        </h2>
        <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />

        <ul className="mt-6 space-y-5">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="font-medium">
                <a
                  href={project.href}
                  className="underline decoration-slate-300 hover:decoration-indigo-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>{" "}
                — {project.description}
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {project.meta}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="max-w-3xl mt-20 mb-24 text-xs text-slate-500 dark:text-slate-400">
        <hr className="mb-4 h-px border-0 bg-slate-200 dark:bg-slate-800" />©{" "}
        {new Date().getFullYear()} Paul Robinson — Built with Next.js +
        Tailwind. Hosted on GitHub Pages.
      </footer>
    </>
  );
}
