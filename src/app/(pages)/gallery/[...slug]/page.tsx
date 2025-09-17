"use client"
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import PageNotFound from "@/components/pageNotFound";
import { useParams } from "next/navigation";

export default function Slugs() {
  // slug will be an array or undefined
  const params = useParams();
  const slug = params.slug as string[] | undefined;
  const slugValue = slug?.[0];

  let slugpage;

  switch (slugValue) {
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

  const slugfoot = <div className="nav-buttons"></div>;

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
