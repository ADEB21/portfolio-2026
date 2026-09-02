// src/sanity/structure.ts
import type { StructureResolver } from "sanity/structure";

import { HomeIcon } from "@sanity/icons/Home";
import { CaseIcon } from "@sanity/icons/Case";
import {DocumentsIcon} from '@sanity/icons/Documents'
import {TagsIcon} from '@sanity/icons/Tags'
import { UserIcon } from "@sanity/icons/User";
import { SparklesIcon } from "@sanity/icons/Sparkles";
import { CalendarIcon } from "@sanity/icons/Calendar";
import { UlistIcon } from "@sanity/icons/Ulist";
import Certification from "@components/atoms/Icons/Certification";
import GraduationCap from "@components/atoms/Icons/GraduationCap";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Gestion de contenu")
    .items([
      // 1. Onglet Dossier "Accueil / À propos"
      S.listItem()
        .title("Accueil / À propos")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Accueil & À propos")
            .items([
              S.listItem()
                .title("Profil")
                .icon(UserIcon)
                .child(
                  S.document().schemaType("profile").documentId("profile"),
                ),

              S.documentTypeListItem("experience")
                .title("Expériences")
                .icon(CalendarIcon),

              S.documentTypeListItem("degree")
                .title("Diplômes (Degree)")
                .icon(GraduationCap),

              S.documentTypeListItem("certificate")
                .title("Certificats")
                .icon(Certification),

              S.documentTypeListItem("skillCategory")
                .title("Catégories de compétences (SkillCategory)")
                .icon(UlistIcon),
            ]),
        ),

      // Premier Séparateur
      S.divider(),

      // 2. À la racine : Projets & Blog
      S.documentTypeListItem("project").title("Projets").icon(CaseIcon),

      S.documentTypeListItem("post") // ou le nom exact de ton schéma blog, ex: "blog"
        .title("Blog")
        .icon(DocumentsIcon),

      // Deuxième Séparateur
      S.divider(),

      // 3. Derniers onglets : Données transverses (Skill & Category)
      S.documentTypeListItem("skill").title("Skills").icon(SparklesIcon),

      S.documentTypeListItem("category").title("Catégories").icon(TagsIcon),
    ]);
