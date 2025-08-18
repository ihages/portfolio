export async function generateStaticParams() {
  const validSlugs = ["shad-a", "shad-b", "shad-c"];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}
