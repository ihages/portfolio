import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import PageNotFound from "@/components/pageNotFound";

export default async function Slugs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // slug will be an array or undefined
  const { slug } = await params;
  const slugValue = slug?.[0];

  let slugpage;
  
  // Handle gallery routes dynamically
  switch (slugValue) {
    // Add your gallery pages here as needed
    // Example:
    // case "my-gallery":
    //   slugpage = <MyGalleryComponent />;
    //   break;
    
    case undefined:
      // No slug provided - could redirect to gallery home or show default content
      slugpage = <div>Gallery Home - Select a gallery to view</div>;
      break;
    default:
      // Unknown slug - show 404
      slugpage = <PageNotFound />;
      break;
  }

  const slughead = (
    <>
      <Breadcrumbs />
    </>
  );

  const slugfoot = (
    <div className="nav-buttons">
    </div>
  );

  return (
    <>
      <title>Ihages | Gallery</title>
      <meta
        name="description"
        content="Isabelle Hageman's portfolio gallery -- coming soon"
      />
      <div className="page-body testing">
        {slughead}
        {slugpage}
        {slugfoot}
      </div>
    </>
  );
}
