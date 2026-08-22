import UserIcon from "@sanity/icons/User";
import { type StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Profil")
        .icon(UserIcon)
        .id("profile")
        .child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      // Filtrer le profil de la liste automatique des documents
      ...S.documentTypeListItems().filter((item) => item.getId() !== "profile"),
    ]);
