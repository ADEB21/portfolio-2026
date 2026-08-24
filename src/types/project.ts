import type { Category } from "./category";

// src/types/project.ts
export interface Project {
  _type: "project";
  _id: string;
  title: string;
  slug: string;
  categories: Category[];
  publishedAt: string;
  summary: string;
  tags: string[];
  isFeatured: boolean;
  coverImage: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  link: string;
}
