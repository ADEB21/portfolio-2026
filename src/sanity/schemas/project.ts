import { defineField, defineType } from "sanity";

import { CaseIcon } from "@sanity/icons/Case";

export const projectType = defineType({
  name: "project",
  title: "Projets",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre du projet",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "picture",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Catégorie(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "year",
      title: "Année",
      type: "string",
      initialValue: "2026",
    }),
    defineField({
      name: "description",
      title: "Description courte",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags / Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "link",
      title: "Lien externe ou dépôt",
      type: "url",
    }),
    defineField({
      name: "isFeatured",
      title: "Mettre en avant sur la page d’accueil",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "isLarge",
      title: "Affichage Grand Format (Bento Span-2)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordre d’affichage",
      type: "number",
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: "Ordre personnalisé",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "coverImage",
    },
  },
});
