import { defineField, defineType } from "sanity";
import {TagIcon} from '@sanity/icons/Tag'

export const categoryType = defineType({
  name: "category",
  title: "Catégories",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      title: "Nom de la catégorie",
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
