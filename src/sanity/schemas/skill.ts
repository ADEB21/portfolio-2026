import { defineField, defineType } from "sanity";
import {SparkleIcon} from '@sanity/icons/Sparkle'

export const skillType = defineType({
  name: "skill",
  title: "Compétences",
  type: "document",
  icon: SparkleIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom de la compétence",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "id",
      title: "Identifiant / Slug icône",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
    },
  },
});