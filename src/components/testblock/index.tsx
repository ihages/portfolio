import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import "./style.css";

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
        <Link href={`${docLink}`}>Documentation</Link>
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
export type CompareBlock = {
  title: string;
  docLink: string;
  zone: ReactNode;
  note?: string;
};

export type TestCompareProps = {
  title: string;
  components: CompareBlock[];
};

export function TestCompare(props: TestCompareProps) {
  const { title, components } = props;
  return (
    <>
      <h3 className="compare-title">{title}</h3>
      <div className="test-compare">
        {components.map((component) => (
          <div className="compare-component" key={component.title}>
            <h4>{component.title}</h4>
            <Button
              variant={"link"}
              asChild
              style={{
                padding: "0",
                marginBottom: "20px",
                textDecoration: "underline",
              }}
            >
              <Link href={`${component.docLink}`}>Documentation</Link>
            </Button>
            <div className="test-zone">{component.zone}</div>
            {component.note ? (
              <p>
                <strong>Note: </strong>
                {component.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
