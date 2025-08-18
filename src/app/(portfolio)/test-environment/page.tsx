import { Button } from "@/components/ui/button";
import "./style.css";
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
      <p>
        <strong>Takeaways: </strong>These may required restyling, especially
        since I added custom colors. Accessibility is not default, so adding
        titles and aria would need to be done manually.
      </p>
      <div className="nav-pages">
        <Button asChild variant={"default"} size={"default"}>
          <Link href="/test-environment/shad-a">a</Link>
        </Button>
        <Button asChild variant={"default"} size={"default"}>
          <Link href="/test-environment/shad-b">b</Link>
        </Button>
      </div>
    </div>
  );
}
