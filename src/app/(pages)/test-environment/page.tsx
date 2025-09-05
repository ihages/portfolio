"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { useEffect } from "react";
import * as mui from "@mui/material";
import { useTheme } from "@/utils/mui-theme";

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
        <h2>ShadCN versus MUI</h2>
        <div className="flex gap-[20px]">
          <Button asChild>
            <Link href="/test-environment/comparison-data-display">
              Data Displays
            </Link>
          </Button>
          <Button asChild>
            <Link href="/test-environment/comparison-inputs">Inputs</Link>
          </Button>
        </div>
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
          global.css. The disabled color's opacity also has difficulty rendering
          in dark mode.
        </p>
        <div className="flex gap-[20px]">
          <mui.ThemeProvider theme={useTheme()}>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-data-display"
            >
              Data Display
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-feedback"
            >
              Feedback
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-inputs"
            >
              Inputs
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-layouts"
            >
              Layouts
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-navigation"
            >
              Navigation
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-surfaces"
            >
              Surfaces
            </mui.Button>
            <mui.Button
              variant="contained"
              href="/portfolio/test-environment/mui-utils"
            >
              Utils
            </mui.Button>
          </mui.ThemeProvider>
        </div>
      </div>
    </>
  );
}
