// src/types/post.ts
import type { PortableTextBlock } from "@portabletext/react";

export interface Legal {
  _type: string;
  _id: string;
  _updatedAt: string;
  title: string;
  summary: string;
  slug: string;
  content: PortableTextBlock;
}
