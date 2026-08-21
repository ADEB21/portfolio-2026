import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons/Book";

export const degreeType = defineType({
  name: "degree",
  title: "Diplômes & Formations",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Intitulé du diplôme",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Établissement",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Période (ex: 2023 — 2025)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "credentialId",
      title: "Identifiant / Code RNCP",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Résumé / Thématique",
      type: "text",
      rows: 3,
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
      subtitle: "issuer",
    },
  },
});
