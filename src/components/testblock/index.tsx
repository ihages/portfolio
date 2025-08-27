import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";


export type TestBlockProps = {
  title: string;
  docLink: string;
  zone: ReactNode;
  note?: string;
};

export function TestBlock(props: TestBlockProps) {
  const { title, docLink, zone, note } = props;
  return (
    <div className="test-block">
      <h3>{title}</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href={`https://ui.shadcn.com/docs/components/${docLink}`}>
          Documentation
        </Link>
      </Button>
      {note ? (
        <p>
          <strong>Note: </strong>
          {note}
        </p>
      ) : null}
      <div className="test-zone">{zone}</div>
    </div>
  );
}