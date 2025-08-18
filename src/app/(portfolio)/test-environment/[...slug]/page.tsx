import { Button } from "@/components/ui/button";
import "./style.css";
import { ChevronRightIcon } from "lucide-react";
import { IconGitBranch } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateStaticParams() {
  const validSlugs = ["shad-a", "shad-b"];
  return validSlugs.map((slug) => ({ slug: [slug] }));
}

export default function Slugs({ params }: { params: { slug?: string[] } }) {
  // slug will be an array or undefined
  const slugValue = params.slug?.[0];

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
      nextPage = null;
      break;
    case undefined:
    default:
      slugpage = <div className="page-body">Page not found</div>;
      break;
  }

  const slughead = (
    <>
      <h1>Testing Grounds</h1>
      <h2>Shadcn: {slugValue?.replace("shad-", "").toUpperCase()}</h2>
      <div className="nav-buttons">
        <div className="nav-buttons-left">
          <Button asChild variant={"default"} size={"default"}>
            <Link href="/test-environment">Test Env</Link>
          </Button>
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
    </>
  );

  const slugfoot = (
    <div className="nav-buttons">
      <div className="nav-buttons-left">
        <Button asChild variant={"default"} size={"default"}>
          <Link href="/test-environment">Go Back</Link>
        </Button>
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
    <div className="page-body testing">
      {slughead}
      {slugpage}
      {slugfoot}
    </div>
  );
}

export function ShadA() {
  return (
    <div className="page-body testing">
      <h3>Accordion</h3>
      <div className="test-zone">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item 1">
            <AccordionTrigger>Accordion Trigger 1 </AccordionTrigger>
            <AccordionContent>Accordion Contents 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item 2">
            <AccordionTrigger>Accordion Trigger 2 </AccordionTrigger>
            <AccordionContent>Accordion Contents 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <h3>Alert</h3>
      <div className="test-zone">
        <Alert>
          <CheckCircle2Icon size={20} style={{ paddingRight: "5px" }} />
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert>
          <PopcornIcon size={20} style={{ paddingRight: "5px" }} />
          <AlertTitle>
            This Alert has a title and an icon. No description.
          </AlertTitle>
        </Alert>
        <Alert variant="destructive">
          <AlertCircleIcon size={20} style={{ paddingRight: "5px" }} />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
            <ul className="list-inside list-disc text-sm">
              <li>Check your card details</li>
              <li>Ensure sufficient funds</li>
              <li>Verify billing address</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
      <h3>Alert Dialogue</h3>
      <div className="test-zone">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
              <AlertDialogDescription>
                This is the description of the dialog
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <h3>Aspect Ratio</h3>
      <p>
        <strong>Note: </strong>The class name for the next/Image was outdated in
        the docs.
      </p>
      <div className="test-zone">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <Image
            src="RapidTech.png"
            alt="A thumbnail of the RapidTech webpage"
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <h3>Avatar</h3>
      <p>
        <strong>Note: </strong>Changing the username in the image src will
        return different icons. This could be set up with a GitHub integrated
        login to get the username for the Avatar Fallback initials as well.
      </p>
      <div className="test-zone">
        <Avatar style={{ width: "100px", height: "100px" }}>
          <AvatarImage src="https://github.com/ihages.png" />
          <AvatarFallback>IH</AvatarFallback>
        </Avatar>
        <Avatar style={{ width: "100px", height: "100px" }}>
          <AvatarImage src="" />
          <AvatarFallback>IH</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export function ShadB() {
  return (
    <div className="page-body testing">
      <h3>Button</h3>
      <p>
        <strong>Note: </strong>Destructive is red regardless of theme. My color
        palet just makes all the primary colors red.
      </p>
      <div className="test-zone">
        <Button asChild variant={"default"} size={"default"}>
          <Link href="/">Default Button</Link>
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
