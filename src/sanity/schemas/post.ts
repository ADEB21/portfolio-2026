import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons/BlockContent";

export const postType = defineType({
  name: "post",
  title: "Blog",
  type: "document",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre de l'article",
      type: "string",
      validation: (rule) => rule.required().error("Le titre est obligatoire"),
    }),

    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().error("Le slug est nécessaire pour générer l'URL"),
    }),

    defineField({
      name: "isFeatured",
      title: "Mettre en avant",
      description: "Si coché, l'article prendra 2 colonnes dans la grille",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "readTime",
      title: "Temps de lecture estimé",
      type: "number",
      initialValue: 5,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Résumé court (Chôpo / Extrait)",
      description:
        "Affiché sur les cartes du Hub Blog et pour les balises SEO.",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule
          .required()
          .max(260)
          .warning(
            "Un extrait concis (moins de 260 caractères) est recommandé",
          ),
    }),

    defineField({
      name: "categories",
      title: "Catégorie(s)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (rule) => rule.required().min(1).error("Associez au moins une catégorie").max(4),
    }),

    defineField({
      name: "tags",
      title: "Tags & Mots-clés",
      description:
        "Technologies et thématiques abordées (ex: React, A11y, Performance)",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif (Alt)",
          type: "string",
          description: "Important pour l'accessibilité et le SEO",
        }),
      ],
    }),

    defineField({
      name: "body",
      title: "Contenu de l'article",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "picture",
        },
        {
          type: "code",
        },
      ],
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
      date: "publishedAt",
      media: "coverImage",
      isFeatured: "isFeatured",
    },
    prepare({ title, date, media, isFeatured }) {
      return {
        title: `${isFeatured ? "★ " : ""}${title}`,
        subtitle: date ? `Publié le ${date}` : "Brouillon",
        media,
      };
    },
  },
});
