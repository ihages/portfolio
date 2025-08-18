"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { useEffect } from "react";

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
        <h2>Shadcn</h2>
        <p>
          <strong>Takeaways: </strong>These may required restyling, especially
          since I added custom colors. Accessibility is not default, so adding
          titles and aria would need to be done manually.
        </p>
        <div className="nav-pages">
          <div>
            <Button asChild variant={"default"} size={"default"}>
              <Link href="/test-environment/shad-a">A</Link>
            </Button>
            <ul>
              <li>Accordion</li>
              <li>Alert</li>
              <li>Alert Dialogue</li>
              <li>Aspect Ratio</li>
              <li>Avatar</li>
            </ul>
          </div>
          <div>
            <Button asChild variant={"default"} size={"default"}>
              <Link href="/test-environment/shad-b">B</Link>
            </Button>
            <ul>
              <li>Badge</li>
              <li>Breadcrumb</li>
              <li>Button</li>
            </ul>
          </div>
          <div>
            <Button asChild variant={"default"} size={"default"}>
              <Link href="/test-environment/shad-c">C</Link>
            </Button>
            <ul>
              <li>Calendar</li>
              <li>Card</li>
              <li>Carousel</li>
              <li>Chart</li>
              <li>Checkbox</li>
              <li>Collapsible</li>
              <li>Combobox</li>
              <li>Command</li>
              <li>Context Menu</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
