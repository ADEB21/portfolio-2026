import { categoryType } from "./schemas/category";
import { certificateType } from "./schemas/certificate";
import { degreeType } from "./schemas/degree";
import { experienceType } from "./schemas/experience";
import { colorPaletteBlock } from "./schemas/objects/colorPaletteBlock";
import { postType } from "./schemas/post";
import { profileType } from "./schemas/profile";
import { projectType } from "./schemas/project";
import { skillType } from "./schemas/skill";
import { skillCategoryType } from "./schemas/skillCategory";
import { pictureType } from "./schemas/utils/picture";

export const schemaType = [
  projectType,
  profileType,
  pictureType,
  skillCategoryType,
  experienceType,
  degreeType,
  certificateType,
  skillType,
  categoryType,
  postType,
  colorPaletteBlock,
];
