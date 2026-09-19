// sanity/schemaTypes/legalPage.ts
import { defineField, defineType } from "sanity";

export const legalPageType = defineType({
  name: "legalPage",
  title: "Pages Légales",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre du document",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
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
      name: "content",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      date: "lastUpdated",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title || "Page sans titre",
        subtitle: `/${subtitle || ""} • Màj: ${date || "N/A"}`,
      };
    },
  },
});
