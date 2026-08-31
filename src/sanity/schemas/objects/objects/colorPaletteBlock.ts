// src/sanity/schemas/objects/colorPaletteBlock.ts
import { defineField, defineType } from "sanity";

export const colorPaletteBlock = defineType({
  name: "colorPaletteBlock",
  title: "Nuancier Chromatique",
  type: "object",
  icon: () => "🎨",
  fields: [
    defineField({
      name: "title",
      title: "Titre du nuancier",
      type: "string",
      initialValue: "Palette & Intention Graphique",
    }),
    defineField({
      name: "description",
      title: "Note explicative / Justification",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "colors",
      title: "Nuances",
      type: "array",
      validation: (rule) => rule.min(1).required(),
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "hex",
              title: "Code Hexadécimal",
              type: "string",
              placeholder: "#0541DC",
              validation: (rule) =>
                rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
                  name: "hex code",
                  invert: false,
                }),
            }),
            defineField({
              name: "name",
              title: "Nom de la teinte",
              type: "string",
              placeholder: "Bleu Royal SCC",
            }),
            defineField({
              name: "usage",
              title: "Rôle / Utilisation",
              type: "string",
              placeholder: "Action principale & focus",
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "hex",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || subtitle || "Nuance",
                subtitle: subtitle,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      colors: "colors",
    },
    prepare({ title, colors }) {
      return {
        title: title || "Nuancier Chromatique",
        subtitle: `${colors?.length || 0} nuance(s)`,
      };
    },
  },
});
