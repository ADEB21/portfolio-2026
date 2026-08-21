export const PROFILE_QUERY = `*[_type == "profile"][0]`;

export const PROJECTS_HOME_QUERY = `*[_type == "project" && isFeatured == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  categories[]->{title},
  year,
  description,
  tags,
  link,
  isLarge,
  coverImage
}`;

export const SKILLS_CATEGORIES_QUERY = `*[_type == "skillCategory"] | order(order asc) {
  _id,
  tag,
  title,
  description,
  skills[]->{
    name,
    id
  }
}`;

export const EXPERIENCES_QUERY = `*[_type == "experience"] | order(order asc) {
  _id,
  role,
  company,
  dates,
  contract,
  details
}`;

export const DEGREES_QUERY = `*[_type == "degree"] | order(order asc) {
  _id,
  _type,
  title,
  issuer,
  date,
  credentialId,
  summary
}`;

export const CERTIFICATES_QUERY = `*[_type == "certificate"] | order(order asc) {
  _id,
  _type,
  title,
  issuer,
  date,
  credentialId,
  skills[]->{
    name,
    id
  }
}`;

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  categories[]->{title},
  year,
  description,
  tags,
  link,
  isLarge,
  coverImage
}`;