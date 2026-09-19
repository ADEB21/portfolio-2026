// src/types/post.ts
import type { PortableTextBlock } from "@portabletext/react";
import type { Category } from "./category";
import type { Skill } from "./skill";

export interface Post {
  _type: string;
  _id: string;
  title: string;
  slug: string;
  categories: Category[];
  stack: Skill[];
  publishedAt: string;
  summary: string;
  isFeatured: boolean;
  coverImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  readTime?: number;
  body: PortableTextBlock;
  link?: string;
  role: string;

}
