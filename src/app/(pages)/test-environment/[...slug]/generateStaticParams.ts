export async function generateStaticParams() {
  const validSlugs = ["shad-a", "shad-b", "shad-c", "shad-d", "shad-h-m", "shad-n-r", "shad-s", "shad-t"];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}
