// src/types/post.ts
import type { Category } from "./category";

export interface Post {
  _type: string;
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
    };
  };
  readTime?: number;
  body?: [];
  link?: string;
}
