"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
;
import Link from "next/link";
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";

import { ShadA, ShadB, ShadC } from "./shad-pages";
import { generateStaticParams } from "./generateStaticParams";

export default function Slugs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // slug will be an array or undefined
  const { slug } = React.use(params);
  const slugValue = slug?.[0];

  let prevPage;
  let nextPage;
  let slugpage;
  switch (slugValue) {
    case "shad-a":
      slugpage = <ShadA />;
      prevPage = null;
      nextPage = "B";
      break;
    case "shad-b":
      slugpage = <ShadB />;
      prevPage = "A";
      nextPage = "C";
      break;
    case "shad-c":
      slugpage = <ShadC />;
      prevPage = "B";
      nextPage = null;
      break;
    case undefined:
    default:
      slugpage = <div className="page-body">Page not found</div>;
      break;
  }

  const slughead = (
    <>
      <Breadcrumbs />
      <div className="nav-buttons">
        <div className="nav-buttons-left">
          {prevPage !== null ? (
            <Button asChild variant={"default"} size={"default"}>
              <Link href={`/test-environment/shad-${prevPage?.toLowerCase()}`}>
                {prevPage}
              </Link>
            </Button>
          ) : null}
        </div>
        <div className="nav-buttons-right">
          {nextPage !== null ? (
            <Button asChild variant={"default"} size={"default"}>
              <Link href={`/test-environment/shad-${nextPage?.toLowerCase()}`}>
                {nextPage}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );

  const slugfoot = (
    <div className="nav-buttons">
      <div className="nav-buttons-left">
        {prevPage !== null ? (
          <Button asChild variant={"default"} size={"default"}>
            <Link href={`/test-environment/shad-${prevPage?.toLowerCase()}`}>
              {prevPage}
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="nav-buttons-right">
        {nextPage !== null ? (
          <Button asChild variant={"default"} size={"default"}>
            <Link href={`/test-environment/shad-${nextPage?.toLowerCase()}`}>
              {nextPage}
            </Link>
          </Button>
        ) : null}
      </div>
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
