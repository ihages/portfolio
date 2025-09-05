export async function generateStaticParams() {
  // No gallery pages implemented yet, return empty array to prevent build errors
  const validSlugs: string[] = [];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}
