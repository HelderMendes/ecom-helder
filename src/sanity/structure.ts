import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Helder Web Shop")
    .items([
      // S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      // S.documentTypeListItem("author").title("Authors"),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["posts", "category"].includes(item.getId()!),
      ),
    ]);
