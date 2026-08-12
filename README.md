# Portfolio 2026 🚀

Bienvenue sur le dépôt de mon portfolio personnel. Ce site vitrine est conçu pour présenter mes projets, mes compétences et mon parcours, tout en intégrant une interface de gestion de contenu dynamique et fluide.

---

## 🛠️ Stack Technique

- **Framework Front-end :** [Astro](https://astro.build/) (délivrant un HTML ultra-léger et un rendu hybride performant)
- **CMS Headless :** [Sanity](https://www.sanity.io/) (gestion du contenu intégrée directement sur la route `/admin`)
- **UI & Composants :** [React](https://react.dev/) + [MDX](https://mdxjs.com/) (pour les pages dynamiques et le contenu riche)
- **SEO & Performances :** Integrations `@astrojs/sitemap` & `@astrojs/mdx`
- **Gestionnaire de paquets :** [pnpm](https://pnpm.io/)

---

## 📁 Architecture du Projet

```text
portfolio-2026/
├── public/                  # Assets statiques (favicons, images publiques)
├── src/
│   ├── components/          # Composants réutilisables (UI, layouts)
│   ├── layouts/             # Squelettes de pages
│   ├── pages/               # Routes Astro du site
│   │   ├── index.astro      # Page d'accueil
│   │   └── admin/           # Route d'accès à l'interface Sanity Studio
│   └── sanity/              # Schemas et configurations de contenu Sanity
├── astro.config.mjs         # Configuration Astro (Intégrations & Vite)
├── sanity.config.ts         # Configuration du Studio Sanity
├── package.json             # Dépendances et scripts
└── README.md