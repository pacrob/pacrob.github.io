# pacrob.com — Next.js + Tailwind + GitHub Pages

Minimal, text-first portfolio with a fixed sidebar. Deploys automatically via GitHub Actions.

## Local dev

```bash
npm ci
npm run dev
```

## Update content

- Edit sections in `app/page.tsx` (About, Experience, Projects).
- Sidebar content in `components/Sidebar.tsx`.
- Styles in `app/globals.css` and Tailwind tokens in `tailwind.config.ts`.

## Deploy

- Push to `main`. The workflow builds, `next export`s to `out/`, and deploys to GitHub Pages.
- Ensure repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
