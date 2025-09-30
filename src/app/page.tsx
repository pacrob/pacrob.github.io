export default function Page() {
  return (
    <>
      {/* Experience */}
      <section id="experience" className="max-w-3xl mt-16">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
          EXPERIENCE
        </h2>
        <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />

        <article className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-medium">
              Senior Software Engineer — Ethereum Foundation
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              2021–2025
            </span>
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              Maintained & modernized 20+ Python libs; standardized CI/CD and
              LSv testing.
            </li>
            <li>
              Improved ABI decoding performance & safety; coordinated downstream
              pinning.
            </li>
          </ul>
        </article>

        <article className="mt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="font-medium">
              Software Engineer — Seagate Technology
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              2019–2021
            </span>
          </div>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              Built Flask services for a security camera platform and
              containerized backends.
            </li>
            <li>
              Delivered React/TypeScript features and polished demos for
              stakeholders.
            </li>
          </ul>
        </article>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-3xl mt-16">
        <h2 className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
          PROJECTS
        </h2>
        <hr className="mt-2 h-px border-0 bg-slate-200 dark:bg-slate-800" />

        <ul className="mt-6 space-y-5">
          <li>
            <div className="font-medium">
              <a
                href="https://github.com/pacrob/dynamic-sdk-demo"
                className="underline decoration-slate-300 hover:decoration-indigo-600"
                target="_blank"
                rel="noopener"
              >
                Dynamic SDK Demo
              </a>{" "}
              — Minimal app showing embedded wallet + account abstraction flows.
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Repo • Tech: TypeScript, React, Vite
            </div>
          </li>

          <li>
            <div className="font-medium">
              <a
                href="https://github.com/pacrob/gasless-minting"
                className="underline decoration-slate-300 hover:decoration-indigo-600"
                target="_blank"
                rel="noopener"
              >
                Gasless Minting Demo
              </a>{" "}
              — ERC‑20/721 minting on Base Sepolia with relaying.
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Repo • Tech: Solidity, Python
            </div>
          </li>

          <li>
            <div className="font-medium">
              <a
                href="https://github.com/pacrob/collab-editor"
                className="underline decoration-slate-300 hover:decoration-indigo-600"
                target="_blank"
                rel="noopener"
              >
                Collab Editor
              </a>{" "}
              — Realtime doc editing experiment with WebSocket.
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Repo • Tech: TypeScript, WebSocket
            </div>
          </li>
        </ul>
      </section>

      <footer className="max-w-3xl mt-20 mb-24 text-xs text-slate-500 dark:text-slate-400">
        <hr className="h-px border-0 bg-slate-200 dark:bg-slate-800 mb-4" />©{" "}
        {new Date().getFullYear()} Paul Robinson — Built with Next.js +
        Tailwind. Hosted on GitHub Pages.
      </footer>
    </>
  );
}
