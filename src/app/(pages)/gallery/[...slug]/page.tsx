"use client";

import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";

import PageNotFound from "@/components/pageNotFound";

export default function Slugs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // slug will be an array or undefined
  const { slug } = React.use(params);
  const slugValue = slug?.[0];

  let slugpage;
  switch (slugValue) {
    
    case undefined:
    default:
      slugpage = <PageNotFound></PageNotFound>;
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
      <title>Ihages | Testing Environment</title>
      <meta
        name="description"
        content="Isabelle Hageman's testing environment for various npm libraries, currently including ShadCN"
      />
      <div className="page-body testing">
        {slughead}
        {slugpage}
        {slugfoot}
      </div>
    </>
  );
}
