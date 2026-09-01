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
      name: "summary",
      title: "Description courte",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
      initialValue: () => new Date().toISOString().split("T")[0],
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
      name: "link",
      title: "Lien externe ou dépôt",
      type: "url",
    }),

    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "picture",
      validation: (rule) =>
        rule.required().error("L'image de couverture est requise"),
    }),

    defineField({
      name: "categories",
      title: "Catégorie(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule) =>
        rule.required().min(1).error("Associez au moins une catégorie").max(4),
    }),

    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
      validation: (rule) => [
        rule.required().error("Le champ Stack est obligatoire"),
        rule.min(2).error("Veuillez sélectionner au moins 2 technologies"),
        rule
          .unique()
          .error("Chaque technologie ne peut être ajoutée qu'une seule fois"),
      ],
    }),

    defineField({
      title: "Rôle & Périmètre",
      name: "role",
      type: "string",
      validation: (rule) => rule.required().error("Renseigner le role"),
    }),

    defineField({
      name: "body",
      title: "Contenu de l'article",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "picture",
        },
        {
          type: "code",
        },
        { type: "colorPaletteBlock" },
      ],
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
      date: "publishedAt",
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
