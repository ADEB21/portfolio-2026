import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons/Star";
export const certificateType = defineType({
  name: "certificate",
  title: "Certifications",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "title",
      title: "Nom de la certification",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Organisme émetteur",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date d’obtention",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "credentialId",
      title: "Identifiant d’accréditation",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Compétences",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
      validation: (rule) => rule.required().min(1),
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
