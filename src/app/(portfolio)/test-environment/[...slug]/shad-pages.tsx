"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import { ChevronRightIcon } from "lucide-react";
import { IconGitBranch } from "@tabler/icons-react";
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
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { parseDate } from "chrono-node";
import { CalendarIcon } from "lucide-react";
import Calendar24 from "@/components/calendar-24";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Checkbox } from "@/components/ui/checkbox";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
export function ShadA() {
  return (
    <div className="page-body testing">
      <h3>Accordion</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/accordion">
          Documentation
        </Link>
      </Button>
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
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/alert">
          Documentation
        </Link>
      </Button>
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
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/alert-dialog">
          Documentation
        </Link>
      </Button>
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
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/aspect-ratio">
          Documentation
        </Link>
      </Button>
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
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/avatar">
          Documentation
        </Link>
      </Button>
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
  const pathname = usePathname().replace("/", " ").trimStart();
  const pathlist = pathname.split("/");

  return (
    <div className="page-body testing">
      <h3>Badge</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/badge">
          Documentation
        </Link>
      </Button>

      <div className="test-zone">
        <Badge variant="default">Default</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>

      <h3>Breadcrumb</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/breadcrumb">
          Documentation
        </Link>
      </Button>
      <p>
        <strong>Note: </strong>Breadcrumbs by default are staticly defined. For
        dynamic implementation, see the top of each page. There are two more
        examples--custom separator and responsive--in the documentation.
      </p>
      <div className="test-zone vertical">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/test-environment">
                Test Environment
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shad B</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>
                    <BreadcrumbLink href="/test-environment">
                      Test Environment
                    </BreadcrumbLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BreadcrumbLink href="/test-environment/shad-a">
                      Shad A
                    </BreadcrumbLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BreadcrumbLink href="/test-environment/shad-b">
                      Shad B
                    </BreadcrumbLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shad B</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shad B</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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

export function ShadC() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [value, setValue] = React.useState("In 2 days");
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="page-body testing">
      <h3>Calendar</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/calendar">
          Documentation
        </Link>
      </Button>
      <p>
        <strong>Note: </strong>Some of the implementations of the calendar
        require different libraries to be installed. The components can also be
        very large. Due to this, ShadCN has importable blocks that may be a good
        substitute.
      </p>
      <div className="test-zone vertical">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
          captionLayout="dropdown"
        />
        <Calendar24 />
        <div className="flex flex-col gap-3">
          <Label htmlFor="date" className="px-1">
            Schedule Date
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="date"
              value={value}
              style={{ padding: "10px", paddingLeft: "50px" }}
              placeholder="Tomorrow or next week"
              className="bg-background pr-10"
              onChange={(e) => {
                setValue(e.target.value);
                const date = parseDate(e.target.value);
                if (date) {
                  setDate(date);
                  setMonth(date);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(date) => {
                    setDate(date);
                    setValue(formatDate(date));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="text-muted-foreground px-1 text-sm">
            Your post will be published on{" "}
            <span className="font-medium">{formatDate(date)}</span>.
          </div>
        </div>
      </div>
      <h3>Card</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/card">
          Documentation
        </Link>
      </Button>
      <div className="test-zone ">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-[10px]">
                <div className="grid gap-[5px]">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-[5px]">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-[5px]">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <h3>Carousel</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/carousel">
          Documentation
        </Link>
      </Button>
      <div className="test-zone ">
        <Carousel className="w-[50%]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                        {"  "}no loop
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[50%]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                        {"  "}loop
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h3>Chart</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/chart">
          Documentation
        </Link>
      </Button>{" "}
      <p>
        <strong>Note: </strong>There is supposed to be a chart here, but for
        some reason, it is invisible.
      </p>
      <div className="test-zone">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
      <h3>Checkbox</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/checkbox">
          Documentation
        </Link>
      </Button>
      <div className="test-zone">
        <Checkbox
          id="Check"
          checked={checked}
          onCheckedChange={() => setChecked(!checked)}
        ></Checkbox>
        <Label htmlFor="Check">Check this out!</Label>
      </div>
      <h3>Collapsible</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/collapsible">
          Documentation
        </Link>
      </Button>
      <div className="test-zone">
        <Collapsible>
          <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
      </div>
      <h3>Combobox</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/combobox">
          Documentation
        </Link>
      </Button>{" "}
      <p>
        <strong>Note: </strong>This is a composition of other components and
        does not have its own component. See documentation.
      </p>
      <h3>Context Menu</h3>
      <Button
        variant={"link"}
        asChild
        style={{
          padding: "0",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
      >
        <Link href="https://ui.shadcn.com/docs/components/context-menu">
          Documentation
        </Link>
      </Button>
      <div className="test-zone">
        <ContextMenu>
          <ContextMenuTrigger>Right Click Here</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>
  );
}
