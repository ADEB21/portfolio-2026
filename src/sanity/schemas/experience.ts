import { defineField, defineType } from 'sanity';
import {TimelineIcon} from '@sanity/icons/Timeline'

export const experienceType = defineType({
  name: 'experience',
  title: 'Expériences Professionnelles',
  type: 'document',
  icon: TimelineIcon,
  fields: [
    defineField({
      name: 'role',
      title: 'Poste / Rôle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Entreprise / Client',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dates',
      title: 'Période (ex: Octobre 2025 — Aujourd’hui)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contract',
      title: 'Type de contrat / Rôle clé',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Détails de la mission',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
    },
  },
});