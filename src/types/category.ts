import type { SkillType } from './skill';

export interface Category {
  _id?: string;
  tag: string;
  title: string;
  description?: string;
  skills: SkillType[];
  order?: number;
}