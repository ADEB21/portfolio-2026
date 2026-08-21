import { defineField, defineType } from "sanity";
import { StackIcon } from "@sanity/icons/Stack";

export const skillCategoryType = defineType({
  name: "skillCategory",
  title: "Catégories de Compétences",
  type: "document",
  icon: StackIcon,
  fields: [
    defineField({
      name: "tag",
      title: "Surtitre / Tag",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
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
      subtitle: "tag",
    },
  },
});
