"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { useEffect } from "react";
import * as mui from "@mui/material";
import theme from "@/utils/mui-theme";

export default function TestEnvironment() {
  return (
    <>
      <title>Ihages | Testing Environment</title>
      <meta
        name="description"
        content="Isabelle Hageman's testing environment for various npm libraries, currently including ShadCN"
      />
      <div className="page-body testing">
        <Breadcrumbs />
        <h1>Testing Grounds</h1>
        <h2>Shadcn Components</h2>
        <div className="flex gap-[20px]">
          <Button asChild>
            <Link href="/test-environment/shad-a">A</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-a">B</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-c">C</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-h-m">H-M</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-n-r">N-R</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-s">S</Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/shad-t">T</Link>
          </Button>
        </div>
        <h2>MUI Components</h2>
        <p>
          Components use Roboto font by default. Colors do not access
          global.css.
        </p>
        <div className="flex gap-[20px]">
          <mui.ThemeProvider theme={theme()}>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-a"
            >
              A
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-b"
            >
              B
            </mui.Button>
          </mui.ThemeProvider>
        </div>
      </div>
    </>
  );
}
