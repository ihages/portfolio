"use client";

import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageNotFound from "@/components/pageNotFound";
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
import {
  MUIDataDisplay,
  MUIFeedback,
  MUIInputs,
  MUILayout,
  MUINavigation,
  MUISurfaces,
  MUIUtils,
} from "./mui-pages";
import {
  ComparisonDataDisplay,
  ComparisonFeedback,
  ComparisonInputs,
  ComparisonNavigation,
  ComparisonSurfaces,
  ComparisonLayouts,
  ComparisonUtils,
} from "./comparison-pages";
import { useParams } from "next/navigation";

export default function Slugs() {
  const params = useParams();
  const slug = params.slug as string[] | undefined;
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
    case "mui-data-display":
      slugpage = <MUIDataDisplay />;
      prevPage = null;
      nextPage = "Feedback";
      break;
    case "mui-feedback":
      slugpage = <MUIFeedback />;
      prevPage = "Data Display";
      nextPage = "Inputs";
      break;
    case "mui-inputs":
      slugpage = <MUIInputs />;
      prevPage = "Feedback";
      nextPage = "Layouts";
      break;
    case "mui-layouts":
      slugpage = <MUILayout />;
      prevPage = "Inputs";
      nextPage = "Navigation";
      break;
    case "mui-navigation":
      slugpage = <MUINavigation />;
      prevPage = "Layouts";
      nextPage = "Surfaces";
      break;
    case "mui-surfaces":
      slugpage = <MUISurfaces />;
      prevPage = "Navigation";
      nextPage = "Utils";
      break;
    case "mui-utils":
      slugpage = <MUIUtils />;
      prevPage = "Surfaces";
      nextPage = null;
      break;
    case "comparison-data-display":
      slugpage = <ComparisonDataDisplay />;
      prevPage = null;
      nextPage = "Feedback";
      break;
    case "comparison-feedback":
      slugpage = <ComparisonFeedback />;
      prevPage = "Data Display";
      nextPage = "Inputs";
      break;
    case "comparison-inputs":
      slugpage = <ComparisonInputs />;
      prevPage = "Feedback";
      nextPage = "Navigation";
      break;
    case "comparison-navigation":
      slugpage = <ComparisonNavigation />;
      prevPage = "Inputs";
      nextPage = "Layouts";
      break;
    case "comparison-layouts":
      slugpage = <ComparisonLayouts />;
      prevPage = "Navigation";
      nextPage = "Surfaces";
      break;
    case "comparison-surfaces":
      slugpage = <ComparisonSurfaces />;
      prevPage = "Layouts";
      nextPage = "Utils";
      break;
    case "comparison-utils":
      slugpage = <ComparisonUtils />;
      prevPage = "Surfaces";
      nextPage = null;
      break;
    case undefined:
    default:
      slugpage = <PageNotFound />;
      prevPage = null;
      nextPage = null;
      break;
  }

  const prevSlug =
    slugValue?.includes("shad") && !slugValue?.includes("mui")
      ? `shad-${prevPage?.toLowerCase().replace(" ", "-")}`
      : slugValue?.includes("mui") && !slugValue?.includes("shad")
      ? `mui-${prevPage?.toLowerCase().replace(" ", "-")}`
      : slugValue?.includes("comparison")
      ? `comparison-${prevPage?.toLowerCase().replace(" ", "-")}`
      : null;

  const nextSlug =
    slugValue?.includes("shad") && !slugValue?.includes("mui")
      ? `shad-${nextPage?.toLowerCase().replace(" ", "-")}`
      : slugValue?.includes("mui") && !slugValue?.includes("shad")
      ? `mui-${nextPage?.toLowerCase().replace(" ", "-")}`
      : slugValue?.includes("comparison")
      ? `comparison-${nextPage?.toLowerCase().replace(" ", "-")}`
      : null;

  const slughead = (
    <>
      <Breadcrumbs />
      {slugpage.type === PageNotFound ? (
        ""
      ) : (
        <h1 className="flex justify-center m-[0px]">
          {slugValue?.replace(/-/g, " ").toLocaleUpperCase()}
        </h1>
      )}

      {slugpage && (
        <div className="nav-buttons">
          <div className="nav-buttons-left">
            {prevPage !== null ? (
              <Button asChild variant={"default"} size={"default"}>
                <Link href={`/test-environment/${prevSlug}`}>{prevPage}</Link>
              </Button>
            ) : null}
          </div>
          <div className="nav-buttons-right">
            {nextPage !== null ? (
              <Button asChild variant={"default"} size={"default"}>
                <Link href={`/test-environment/${nextSlug}`}>{nextPage}</Link>
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
            <Link href={`/test-environment/${prevSlug}`}>{prevPage}</Link>
          </Button>
        ) : null}
      </div>
      <div className="nav-buttons-right">
        {nextPage !== null ? (
          <Button asChild variant={"default"} size={"default"}>
            <Link href={`/test-environment/${nextSlug}`}>{nextPage}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );

  return (
    <>
    <title>Ihages | ShadCN & MUI Comparison</title>
    <meta
        name="description"
        content="A summary-level comparison between ShadCN and MaterialUI component libraries"
      />
    <div className="page-body testing">
      {slughead}
      {slugpage}
      {slugfoot}
    </div>
    </>
  );
}
