import type { Skill } from "./skill";

export interface Category {
  _id?: string;
  tag: string;
  title: string;
  description?: string;
  skills: Skill[];
  order?: number;
}