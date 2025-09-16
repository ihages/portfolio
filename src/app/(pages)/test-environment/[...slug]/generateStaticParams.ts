export async function generateStaticParams() {
  const validSlugs = [
    // Comparison pages
    "comparison-data-display",
    "comparison-feedback", 
    "comparison-inputs",
    "comparison-layouts",
    "comparison-navigation",
    "comparison-surfaces",
    "comparison-utils",
    // MUI pages  
    "mui-data-display",
    "mui-feedback",
    "mui-inputs", 
    "mui-layouts",
    "mui-navigation",
    "mui-surfaces",
    "mui-utils",
    // Shad pages
    "shad-a", 
    "shad-b", 
    "shad-c", 
    "shad-d", 
    "shad-h-m", 
    "shad-n-r", 
    "shad-s", 
    "shad-t"
  ];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}
