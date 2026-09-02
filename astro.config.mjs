// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";

// Charge explicitement les variables .env dans le fichier de config
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://arthurdebruille.fr",
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      apiVersion: "2026-03-01",
      useCdn: false,
      studioBasePath: "/admin",
      token: env.SANITY_API_READ_TOKEN,
    }),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      registerType: "autoUpdate",
      manifest: {
        name: "Arthur Debruille — Portfolio & Blog",
        short_name: "AD Portfolio",
        description: "Portfolio de Creative Developer & Front-End Architect",
        theme_color: "#B85B35",
        background_color: "#FBF7EE",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/",
        id: "/",
        icons: [
          {
            src: "/icons/icon-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/icon-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/icon-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/desktop-preview.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
            label: "Aperçu de l'application sur ordinateur",
          },
          {
            src: "/screenshots/mobile-preview.png",
            sizes: "645x1398",
            type: "image/png",
            form_factor: "narrow",
            label: "Aperçu de l'application sur mobile",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      },
      devOptions: {
        enabled: true,
      },
    }),
    react(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/atkinson-regular.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-bold.woff"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
