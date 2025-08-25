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
import React, { ReactNode, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as chrono from "chrono-node";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export type TestBlockProps = {
  title: string;
  docSlug: string;
  zone: ReactNode;
  note?: string;
};

export function TestBlock(props: TestBlockProps) {
  const { title, docSlug, zone, note } = props;
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
        <Link href={`https://ui.shadcn.com/docs/components/${docSlug}`}>
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
      <TestBlock
        title="Accordion"
        docSlug="accordion"
        zone={
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
        }
      />
      <TestBlock
        title="Alert"
        docSlug="alert"
        zone={
          <>
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
          </>
        }
      />

      <TestBlock
        title="Alert Dialog"
        docSlug="alert-dialog"
        zone={
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
        }
      />

      <TestBlock
        title="Aspect Ratio"
        docSlug="aspect-ratio"
        note="The class name for the next/Image was outdated in the docs."
        zone={
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <Image
              src="/portfolio/images/RapidTech.png"
              alt="A thumbnail of the RapidTech webpage"
              fill
              className="object-cover"
            />
          </AspectRatio>
        }
      />

      <TestBlock
        title="Avatar"
        docSlug="avatar"
        note="Changing the username in the image src will return different icons. This could be set up with a GitHub integrated login to get the username for the Avatar Fallback initials as well."
        zone={
          <>
            <Avatar style={{ width: "100px", height: "100px" }}>
              <AvatarImage src="https://github.com/ihages.png" />
              <AvatarFallback>IH</AvatarFallback>
            </Avatar>
            <Avatar style={{ width: "100px", height: "100px" }}>
              <AvatarImage src="" />
              <AvatarFallback>IH</AvatarFallback>
            </Avatar>
          </>
        }
      />
    </div>
  );
}

export function ShadB() {
  const pathname = usePathname().replace("/", " ").trimStart();
  const pathlist = pathname.split("/");

  return (
    <div className="page-body testing">
      <TestBlock
        title="Badge"
        docSlug="badge"
        zone={
          <>
            <Badge variant="default">Default</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </>
        }
      />

      <TestBlock
        title="Breadcrumb"
        docSlug="breadcrumb"
        note="Breadcrumbs by default are staticly defined. For dynamic implementation, see the top of each page. There are two more examples--custom separator and responsive--in the documentation."
        zone={
          <div className="vertical">
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
        }
      />

      <TestBlock
        title="Button"
        docSlug="button"
        note="Destructive is red regardless of theme. My color palet just makes all the primary colors red."
        zone={
          <>
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
          </>
        }
      />
    </div>
  );
}

export function ShadC() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [value, setValue] = React.useState("In 2 days");
  const [date, setDate] = React.useState<Date | undefined>(
    chrono.parseDate(value) || undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="page-body testing">
      <TestBlock
        title="Calendar"
        docSlug="calendar"
        note="Some of the implementations of the calendar require different libraries to be installed. The components can also be very large. Due to this, ShadCN has importable blocks that may be a good substitute."
        zone={
          <div className="vertical">
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
                    const date = chrono.parseDate(e.target.value);
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
        }
      />

      <TestBlock
        title="Card"
        docSlug="card"
        zone={
          <>
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
          </>
        }
      />

      <TestBlock
        title="Carousel"
        docSlug="carousel"
        zone={
          <>
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
          </>
        }
      />

      <TestBlock
        title="Chart"
        docSlug="chart"
        note="There is supposed to be a chart here, but for some reason, it is invisible."
        zone={
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
        }
      />

      <TestBlock
        title="Checkbox"
        docSlug="checkbox"
        zone={
          <>
            <Checkbox
              id="Check"
              checked={checked}
              onCheckedChange={() => setChecked(!checked)}
            />
            <Label htmlFor="Check">Check this out!</Label>
          </>
        }
      />

      <TestBlock
        title="Collapsible"
        docSlug="collapsible"
        zone={
          <Collapsible>
            <CollapsibleTrigger>
              Can I use this in my project?
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CollapsibleContent>
          </Collapsible>
        }
      />

      <TestBlock
        title="Context Menu"
        docSlug="context-menu"
        zone={
          <ContextMenu>
            <ContextMenuTrigger>Right Click Here</ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Profile</ContextMenuItem>
              <ContextMenuItem>Billing</ContextMenuItem>
              <ContextMenuItem>Team</ContextMenuItem>
              <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        }
      />
    </div>
  );
}

export function ShadD() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <div className="page-body testing">
      <TestBlock
        title="Dialog"
        docSlug="dialog"
        zone={
          <>
            <Dialog>
              <DialogTrigger>Dialog trigger</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogDescription>Dialog descritpion</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-[10px]">
                    <div className="grid gap-[7px]]">
                      <Label htmlFor="name-1">Name</Label>
                      <Input
                        id="name-1"
                        name="name"
                        defaultValue="Pedro Duarte"
                      />
                    </div>
                    <div className="grid gap-[7px]">
                      <Label htmlFor="username-1">Username</Label>
                      <Input
                        id="username-1"
                        name="username"
                        defaultValue="@peduarte"
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex-row justify-end gap-[7px] py-[10px]">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </>
        }
      />

      <TestBlock
        title="Drawer"
        docSlug="drawer"
        note="I could not get this component to work. The drawer contents never even show up in the DOM."
        zone={
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <div>hi</div>
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        }
      />

      <TestBlock
        title="Dropdown Menu"
        docSlug="dropdown-menu"
        note="see radix API documentation for properties that can be passed on to different components."
        zone={
          <DropdownMenu>
            <Button variant={"outline"} asChild>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent side="bottom" align={"start"}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      />
    </div>
  );
}

export function ShadHM() {
  return (
    <div className="page-body testing">
      <TestBlock
        title="Hover Card"
        docSlug="hover-card"
        zone={
          <HoverCard>
            <HoverCardTrigger>Hover</HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        }
      />

      <TestBlock
        title="Input"
        docSlug="input"
        zone={<Input type="email" placeholder="Email" />}
      />

      <TestBlock
        title="Input OTP"
        docSlug="input-otp"
        zone={
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        }
      />

      <TestBlock
        title="Label"
        docSlug="label"
        zone={
          <>
            <Input type="email" placeholder="Email" id="email" />
            <Label htmlFor="email">this is a label for that input above</Label>
          </>
        }
      />

      <TestBlock
        title="Menubar"
        docSlug="menubar"
        zone={
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent side="bottom">
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        }
      />
    </div>
  );
}

export function ShadNR() {
  const [progress, setProgress] = useState<number>(0);
  const [progressOn, setProgressOn] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (progressOn ? (prev + 1) % 100 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [progressOn]);

  return (
    <div className="page-body testing">
      <TestBlock
        title="Navigation Menu"
        docSlug="navigation-menu"
        zone={
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px]">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px]">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                <NavigationMenuContent className="w-[200px]">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
      />

      <TestBlock
        title="Pagination"
        docSlug="pagination"
        zone={
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="" />
              </PaginationItem>
              <PaginationItem>
                <Button variant={"outline"} asChild>
                  <PaginationLink style={{ textDecoration: "none" }} href="">
                    1
                  </PaginationLink>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        }
      />

      <TestBlock
        title="Popover"
        docSlug="popover"
        zone={
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent side="bottom">
              Place content for the popover here.
            </PopoverContent>
          </Popover>
        }
      />

      <TestBlock
        title="Progress"
        docSlug="progress"
        zone={
          <div className="flex flex-col gap-4">
            <Progress value={Math.min(100, Math.max(0, progress))} />
            <Button onClick={() => setProgressOn(!progressOn)}>
              {progressOn ? "Stop" : "Start"} Progress
            </Button>
          </div>
        }
      />

      <TestBlock
        title="Radio Group"
        docSlug="radio-group"
        zone={
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        }
      />

      <TestBlock
        title="Resizable"
        docSlug="resizable"
        note="I think this is my favorite component of them all."
        zone={
          <>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>One</ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>Two</ResizablePanel>
            </ResizablePanelGroup>

            <ResizablePanelGroup
              direction="horizontal"
              className="max-w-md rounded-lg border md:min-w-[450px]"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="font-semibold">One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Three</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </>
        }
      />
    </div>
  );
}

export function ShadS() {
  return (
    <div className="page-body testing">
      <TestBlock
        title="Scroll Area"
        docSlug="scroll-area"
        zone={
          <p>
            see this component on{" "}
            <Link href="/gallery" className="underline">
              gallery
            </Link>
          </p>
        }
      />

      <TestBlock
        title="Select"
        docSlug="select"
        zone={
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        }
      />

      <TestBlock title="Separator" docSlug="separator" zone={<Separator />} />

      <TestBlock
        title="Sheet"
        docSlug="sheet"
        note="This has the same structure as the Drawer component. Needs further tweaking to get it to display."
        zone={
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Name</Label>
                  <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Username</Label>
                  <Input id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        }
      />

      <TestBlock
        title="Skeleton"
        docSlug="skeleton"
        note="Shape of the skeleton component needs to be programmed into the style. Further looking into how you can get the color to pulse like in the documentation."
        zone={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-[24px] w-[24px] rounded-full" />
            <div className="space-y-[10px]">
              <Skeleton className="h-[12px] w-[250px] m-[2px]" />
              <Skeleton className="h-[12px] w-[200px] m-[2px]" />
            </div>
          </div>
        }
      />

      <TestBlock
        title="Slider"
        docSlug="slider"
        note="Look into connecting to a variable"
        zone={<Slider defaultValue={[50]} max={100} step={1} />}
      />

      <TestBlock
        title="Switch"
        docSlug="slider"
        note="Look into connecting to a variable"
        zone={
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        }
      />
    </div>
  );
}
