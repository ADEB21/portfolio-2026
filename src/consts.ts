// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Arthur DEBRUILLE Portfolio 2026";
export const SITE_DESCRIPTION = "Portfolio 2026 — Product Designer & Design Engineer";

export const navItems: {id: string; label: string;}[] = [
  { id: "apropos", label: "A propos" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "experiences", label: "Expériences" },
  { id: "formations", label: "Formations" },
];

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/arthurdebruille' },
  { name: 'GitHub', url: 'https://github.com/ADEB21' },
  { name: 'Email direct', url: 'mailto:arthurdebruille@proton.me' },
];

export const navigationLinks = [
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Diplômes & Certifications', href: '#formations' },
  { label: 'Hub Projets', href: '/projets' },
];
