// src/types/post.ts
import type { Category } from './category';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  categories: Category[];
  tags?: string[];
  coverImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  isFeatured?: boolean;
  body: [];
}