import { defineField, defineType } from 'sanity';


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
