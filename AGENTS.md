# AGENTS.md

- **Stack:** Astro (Static mode), TinaCMS, Pagefind for search.
- **Commands:**
  - Build: `npx astro build` (or `npm run build` if Tina server isn't running)
  - Dev: `npm run dev` (TinaCMS dev server + Astro)
- **Architecture & Conventions:**
  - Category pagination uses nested catch-all routes: `src/pages/categoria/[...categoria]/[...page].astro` with `params: { categoria: category, page: undefined }` for root page access.
  - Content collections are defined in `src/content.config.ts`.
