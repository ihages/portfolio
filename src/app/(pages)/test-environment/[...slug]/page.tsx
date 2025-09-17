import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import TestEnvironmentClient from "./test-environment-client";
import PageNotFound from "@/components/pageNotFound";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// Generate static params for all valid routes
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
    "shad-t",
  ];

  return validSlugs.map((slug) => ({
    slug: [slug],
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugValue = slug?.[0] || "";

  return {
    title: `Ihages | Testing Environment - ${slugValue.replace(/-/g, " ")}`,
    description:
      "Isabelle Hageman's testing environment for various style libraries and front-end functionality",
  };
}

export default async function DynamicTestEnvironmentPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const slugValue = slug?.[0] || "";
  const validSlugs = (await generateStaticParams()).map(
    (param) => param.slug[0]
  );

  return (
    <>
      <div className="page-body testing">
        {!validSlugs.includes(slugValue) ? null : <Breadcrumbs />}
        <TestEnvironmentClient slug={slug} />
      </div>
    </>
  );
}
