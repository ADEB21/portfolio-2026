// src/types/project.ts
export interface Project {
  _id: string;
  title: string;
  slug: string;
  categories: {title: string;}[];
  year: string;
  description: string;
  tags: string[];
  link: string;
  isFeatured: boolean;
  coverImage: {
    _type: string,
    alt: string,
    asset: {
        _ref: string,
        _type: string
    }
};
}