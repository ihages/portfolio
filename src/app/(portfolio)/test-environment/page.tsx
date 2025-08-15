import { Button } from "@/components/ui/button";
import "./style.css";
import { ChevronRightIcon } from "lucide-react";
import { IconGitBranch } from "@tabler/icons-react";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ihages | Testing",
  description:
    "Isabelle Hageman's portfolio and web development testing grounds",
};

export default function TestEnvironment() {
  return (
    <div className="page-body testing">
      <h1>Testing Grounds</h1>
      <h2>Shadcn</h2>
      <h3>Button</h3>
      <div className="test-zone">
        <Button asChild variant={"default"} size={"default"}>
          <Link href="/portfolio">Default Button</Link>
        </Button>
        <Button variant={"destructive"} size={"default"}>
          Destructive
        </Button>
        <Button variant={"ghost"} size={"default"}>
          Ghost
        </Button>
        <Button variant={"link"} size={"default"}>
          Link
        </Button>
        <Button variant={"outline"} size={"default"}>
          Outline
        </Button>
        <Button variant={"secondary"} size={"default"}>
          Secondary
        </Button>
        <Button variant={"outline"}>
          <IconGitBranch /> New Branch
        </Button>
        <Button size={"icon"}>
          <ChevronRightIcon />
        </Button>
        <Button variant={"default"} size={"sm"}>
          Small
        </Button>
        <Button variant={"default"} size={"lg"}>
          Large
        </Button>
      </div>
    </div>
  );
}
