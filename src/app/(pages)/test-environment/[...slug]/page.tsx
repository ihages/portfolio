import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import Link from "next/link";
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";

import {
  ShadA,
  ShadB,
  ShadC,
  ShadD,
  ShadHM,
  ShadNR,
  ShadS,
  ShadT,
} from "./shad-pages";
import PageNotFound from "@/components/pageNotFound";
import { generateStaticParams as generateParams } from "./generateStaticParams";

export { generateParams as generateStaticParams };

export default async function Slugs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // slug will be an array or undefined
  const { slug } = await params;
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
      nextPage = "D";
      break;
    case "shad-d":
      slugpage = <ShadD />;
      prevPage = "C";
      nextPage = "H-M";
      break;
    case "shad-h-m":
      slugpage = <ShadHM />;
      prevPage = "D";
      nextPage = "N-R";
      break;

    case "shad-n-r":
      slugpage = <ShadNR />;
      prevPage = "H-M";
      nextPage = "S";
      break;

    case "shad-s":
      slugpage = <ShadS />;
      prevPage = "N-R";
      nextPage = "T";
      break;

    case "shad-t":
      slugpage = <ShadT />;
      prevPage = "S";
      nextPage = null;
      break;

    case undefined:
    default:
      slugpage = <PageNotFound></PageNotFound>;
      break;
  }

  const slughead = (
    <>
      <Breadcrumbs />
      {slugpage === <PageNotFound></PageNotFound> ? null : (
        <div className="nav-buttons">
          <div className="nav-buttons-left">
            {prevPage !== null ? (
              <Button asChild variant={"default"} size={"default"}>
                <Link
                  href={`/test-environment/shad-${prevPage?.toLowerCase()}`}
                >
                  {prevPage}
                </Link>
              </Button>
            ) : null}
          </div>
          <div className="nav-buttons-right">
            {nextPage !== null ? (
              <Button asChild variant={"default"} size={"default"}>
                <Link
                  href={`/test-environment/shad-${nextPage?.toLowerCase()}`}
                >
                  {nextPage}
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      )}
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
