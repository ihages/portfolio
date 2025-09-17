"use client";

import React from "react";
import PageNotFound from "@/components/pageNotFound";

interface TestEnvironmentClientProps {
  slug: string[];
}

export default function GalleriesClient({
  slug,
}: TestEnvironmentClientProps) {
  const slugValue = slug?.[0];

  let slugpage;

  switch (slugValue) {
    case "slug":
      slugpage = "Placeholder";
      break;
    default:
      return (
        <div className="pt-[100px]">
          <PageNotFound />
        </div>
      );
  }

  return (
    <div className="page-body gallery">
      <h1 className="flex justify-center m-[0px]">
        {slugValue?.replace(/-/g, " ").toUpperCase()}
      </h1>
      {slugpage}
    </div>
  );
}