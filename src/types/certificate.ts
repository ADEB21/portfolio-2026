import type { SkillType } from "./skill";

export interface Certificate {
  title: string;
  date: string;
  issuer: string;
  credentialId: string;
  skills?: SkillType[];
  summary?: string;
  _type: "degree" | "certificate" | string;
}