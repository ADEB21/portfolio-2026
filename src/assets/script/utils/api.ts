export const PROFILE_QUERY = `*[_type == "profile"][0]`;

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

export const PROJECTS_FEATURED_QUERY = `*[_type == "project" && isFeatured == true] | order(order asc) {
  _type,
  _id,
  title,
  "slug": slug.current,
  categories[]->{title},
  publishedAt,
  summary,
  link,
  isFeatured,
  coverImage,
  stack[]->
}`;

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _type,
  _id,
  title,
  role,
  stack[]->,
  "slug": slug.current,
  categories[]->{title},
  publishedAt,
  summary,
  link,
  isFeatured,
  coverImage
}`;

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _type,
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  summary,
  categories[]->{ title },
  coverImage,
  isFeatured
}`;

export const POSTS_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`;

export const PROJECTS_SLUGS_QUERY = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _type,
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  summary,
  categories[]->{ title },
  coverImage,
  body
}`;

export const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _type,
  _id,
  title,
  role,
  stack[]->,
  "slug": slug.current,
  publishedAt,
  summary,
  categories[]->{ title },
  coverImage,
  body,
  link
}`;
