export async function generateStaticParams() {
  // Provide a fallback route to satisfy build requirements
  // This dynamic route currently only serves PageNotFound
  return [
    { slug: ["not-found"] }
  ];
}
