// src/components/TechIcon.tsx
import React from "react";
import { Icon } from "@iconify/react";

// Dictionnaire des identifiants Iconify
// src/components/TechIcon.tsx
const ICON_MAP: Record<string, string> = {
  // Langages & Frameworks
  react: "devicon:react",
  nextjs: "devicon:nextjs",
  astro: "devicon:astro",
  typescript: "devicon:typescript",
  javascript: "devicon:javascript",
  vuejs: "devicon:vuejs",
  html5: "devicon:html5",
  sass: "devicon:sass",

  // UI & Design
  tailwind: "devicon:tailwindcss",
  figma: "devicon:figma",
  storybook: "devicon:storybook",
  responsive: "lucide:smartphone",
  a11y: "lucide:accessibility",

  // Tooling & DevOps
  git: "devicon:git",
  github: "devicon:github",
  vite: "devicon:vitejs",
  webpack: "devicon:webpack",
  vercel: "devicon:vercel",
  netlify: "devicon:netlify",

  // 4ᵉ Carte : Méthodologie & IA
  agile: "lucide:kanban-square",
  codereview: "lucide:git-pull-request-arrow",
  api: "lucide:network",
  ai: "lucide:sparkles",

  // Certifications
  meta: "logos:meta-icon",
};

interface TechIconProps {
  name: string;
  size?: number | string;
  className?: string;
}

export default function IconComponent({
  name,
  size = 20,
  className = "",
}: TechIconProps) {
  const iconId = ICON_MAP[name.toLowerCase()] || "lucide:code-2";

  return (
    <Icon
      icon={iconId}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}
