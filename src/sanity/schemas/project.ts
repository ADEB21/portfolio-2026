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
      name: "isFeatured",
      title: "Mettre en avant",
      description: "Si coché, l'article prendra 2 colonnes dans la grille",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "categories",
      title: "Catégorie(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule) => rule.required().min(1).max(4),
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
      name: "order",
      title: "Ordre d’affichage",
      type: "number",
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: "Ordre",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "year",
      media: "coverImage",
      isFeatured: "isFeatured",
    },
    prepare({ title, date, media, isFeatured }) {
      return {
        title: `${isFeatured ? "★ " : ""}${title}`,
        subtitle: date,
        media,
      };
    },
  },
});
