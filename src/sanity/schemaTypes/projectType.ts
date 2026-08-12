import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      title: "Titre",
      name: "title",
      type: "string",
    }),
  ],
});
