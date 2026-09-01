import { defineField, defineType } from "sanity";

export const pictureType = defineType({
  title: "Image",
  type: "image",
  name: "picture",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Texte alternatif",
      validation: (rule) => [
        rule.required().error("Le texte alternatif (alt) est obligatoire"),
      ],
    }),
  ],
  preview: {
    select: {
      title: "alt",
      img: "asset",
    },
    prepare({ title, img }) {
      return {
        title: title,
        media: img,
      };
    },
  },
});
