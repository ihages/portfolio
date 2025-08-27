export async function generateStaticParams() {
  const validSlugs = ["shad-a", "shad-b", "shad-c", "shad-d", "shad-h-m", "shad-date-parser"];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}
