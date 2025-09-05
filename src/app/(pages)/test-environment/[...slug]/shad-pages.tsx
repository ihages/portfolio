"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import {
  ChevronRightIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  PopcornIcon,
  CalendarIcon,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { IconGitBranch } from "@tabler/icons-react";
import Link from "next/link";
import * as Accordion from "@/components/ui/accordion";
import * as Alert from "@/components/ui/alert";
import * as AlertDialog from "@/components/ui/alert-dialog";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as Avatar from "@/components/ui/avatar";
import * as Breadcrumb from "@/components/ui/breadcrumb";
import React, { ReactNode, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import * as Popover from "@/components/ui/popover";
import * as chrono from "chrono-node";
import Calendar24 from "@/components/calendar-24";
import * as Card from "@/components/ui/card";
import * as Carousel from "@/components/ui/carousel";
import * as Collapsible from "@/components/ui/collapsible";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import * as Chart from "@/components/ui/chart";
import * as ContextMenu from "@/components/ui/context-menu";
import { Checkbox } from "@/components/ui/checkbox";
import * as Dialog from "@/components/ui/dialog";
import * as Drawer from "@/components/ui/drawer";
import * as HoverCard from "@/components/ui/hover-card";
import * as InputOTP from "@/components/ui/input-otp";
import * as Menubar from "@/components/ui/menubar";
import * as NavigationMenu from "@/components/ui/navigation-menu";
import * as Pagination from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import * as RadioGroup from "@/components/ui/radio-group";
import * as Resizable from "@/components/ui/resizable";
import * as Select from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import * as Sheet from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import * as Tabs from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import * as ToggleGroup from "@/components/ui/toggle-group";
import * as Tooltip from "@/components/ui/tooltip";
import { TestBlock } from "@/components/testblock";

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
} satisfies Chart.ChartConfig;

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
        docLink="https://ui.shadcn.com/docs/components/accordion"
        zone={
          <Accordion.Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <Accordion.AccordionItem value="item 1">
              <Accordion.AccordionTrigger>
                Accordion Trigger 1{" "}
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent>
                Accordion Contents 1
              </Accordion.AccordionContent>
            </Accordion.AccordionItem>
            <Accordion.AccordionItem value="item 2">
              <Accordion.AccordionTrigger>
                Accordion Trigger 2{" "}
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent>
                Accordion Contents 2
              </Accordion.AccordionContent>
            </Accordion.AccordionItem>
          </Accordion.Accordion>
        }
      />
      <TestBlock
        title="Alert"
        docLink="https://ui.shadcn.com/docs/components/alert"
        zone={
          <>
            <Alert.Alert>
              <CheckCircle2Icon size={20} style={{ paddingRight: "5px" }} />
              <Alert.AlertTitle>
                Success! Your changes have been saved
              </Alert.AlertTitle>
              <Alert.AlertDescription>
                This is an alert with icon, title and description.
              </Alert.AlertDescription>
            </Alert.Alert>
            <Alert.Alert>
              <PopcornIcon size={20} style={{ paddingRight: "5px" }} />
              <Alert.AlertTitle>
                This Alert has a title and an icon. No description.
              </Alert.AlertTitle>
            </Alert.Alert>
            <Alert.Alert variant="destructive">
              <AlertCircleIcon size={20} style={{ paddingRight: "5px" }} />
              <Alert.AlertTitle>
                Unable to process your payment.
              </Alert.AlertTitle>
              <Alert.AlertDescription>
                <p>Please verify your billing information and try again.</p>
                <ul className="list-inside list-disc text-sm">
                  <li>Check your card details</li>
                  <li>Ensure sufficient funds</li>
                  <li>Verify billing address</li>
                </ul>
              </Alert.AlertDescription>
            </Alert.Alert>
          </>
        }
      />

      <TestBlock
        title="Alert Dialog"
        docLink="https://ui.shadcn.com/docs/components/alert-dialog"
        zone={
          <AlertDialog.AlertDialog>
            <AlertDialog.AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialog.AlertDialogTrigger>
            <AlertDialog.AlertDialogContent>
              <AlertDialog.AlertDialogHeader>
                <AlertDialog.AlertDialogTitle>
                  Alert Dialog Title
                </AlertDialog.AlertDialogTitle>
                <AlertDialog.AlertDialogDescription>
                  This is the description of the dialog
                </AlertDialog.AlertDialogDescription>
              </AlertDialog.AlertDialogHeader>
              <AlertDialog.AlertDialogFooter>
                <AlertDialog.AlertDialogCancel>
                  Cancel
                </AlertDialog.AlertDialogCancel>
                <AlertDialog.AlertDialogAction>
                  Continue
                </AlertDialog.AlertDialogAction>
              </AlertDialog.AlertDialogFooter>
            </AlertDialog.AlertDialogContent>
          </AlertDialog.AlertDialog>
        }
      />

      <TestBlock
        title="Aspect Ratio"
        docLink="https://ui.shadcn.com/docs/components/aspect-ratio"
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
        docLink="https://ui.shadcn.com/docs/components/avatar"
        note="Changing the username in the image src will return different icons. This could be set up with a GitHub integrated login to get the username for the Avatar Fallback initials as well."
        zone={
          <>
            <Avatar.Avatar style={{ width: "100px", height: "100px" }}>
              <Avatar.AvatarImage src="https://github.com/ihages.png" />
              <Avatar.AvatarFallback>IH</Avatar.AvatarFallback>
            </Avatar.Avatar>
            <Avatar.Avatar style={{ width: "100px", height: "100px" }}>
              <Avatar.AvatarImage src="" />
              <Avatar.AvatarFallback>IH</Avatar.AvatarFallback>
            </Avatar.Avatar>
          </>
        }
      />
    </div>
  );
}

export function ShadB() {

  return (
    <div className="page-body testing">
      <TestBlock
        title="Badge"
        docLink="https://ui.shadcn.com/docs/components/badge"
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
        docLink="https://ui.shadcn.com/docs/components/breadcrumb"
        note="Breadcrumbs by default are staticly defined. For dynamic implementation, see the top of each page. There are two more examples--custom separator and responsive--in the documentation."
        zone={
          <div className="vertical">
            <Breadcrumb.Breadcrumb>
              <Breadcrumb.BreadcrumbList>
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink href="/">
                    Home
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink href="/test-environment">
                    Test Environment
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbPage>Shad B</Breadcrumb.BreadcrumbPage>
                </Breadcrumb.BreadcrumbItem>
              </Breadcrumb.BreadcrumbList>
            </Breadcrumb.Breadcrumb>

            <Breadcrumb.Breadcrumb>
              <Breadcrumb.BreadcrumbList>
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink href="/">
                    Home
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <DropdownMenu.DropdownMenu>
                    <DropdownMenu.DropdownMenuTrigger>
                      Dropdown
                    </DropdownMenu.DropdownMenuTrigger>
                    <DropdownMenu.DropdownMenuContent align="start">
                      <DropdownMenu.DropdownMenuItem>
                        <Breadcrumb.BreadcrumbLink href="/test-environment">
                          Test Environment
                        </Breadcrumb.BreadcrumbLink>
                      </DropdownMenu.DropdownMenuItem>
                      <DropdownMenu.DropdownMenuItem>
                        <Breadcrumb.BreadcrumbLink href="/test-environment/shad-a">
                          Shad A
                        </Breadcrumb.BreadcrumbLink>
                      </DropdownMenu.DropdownMenuItem>
                      <DropdownMenu.DropdownMenuItem>
                        <Breadcrumb.BreadcrumbLink href="/test-environment/shad-b">
                          Shad B
                        </Breadcrumb.BreadcrumbLink>
                      </DropdownMenu.DropdownMenuItem>
                    </DropdownMenu.DropdownMenuContent>
                  </DropdownMenu.DropdownMenu>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbPage>Shad B</Breadcrumb.BreadcrumbPage>
                </Breadcrumb.BreadcrumbItem>
              </Breadcrumb.BreadcrumbList>
            </Breadcrumb.Breadcrumb>

            <Breadcrumb.Breadcrumb>
              <Breadcrumb.BreadcrumbList>
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbLink href="/">
                    Home
                  </Breadcrumb.BreadcrumbLink>
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbEllipsis />
                </Breadcrumb.BreadcrumbItem>
                <Breadcrumb.BreadcrumbSeparator />
                <Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbPage>Shad B</Breadcrumb.BreadcrumbPage>
                </Breadcrumb.BreadcrumbItem>
              </Breadcrumb.BreadcrumbList>
            </Breadcrumb.Breadcrumb>
          </div>
        }
      />

      <TestBlock
        title="Button"
        docLink="https://ui.shadcn.com/docs/components/button"
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
        docLink="https://ui.shadcn.com/docs/components/calendar"
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
                <Popover.Popover open={open} onOpenChange={setOpen}>
                  <Popover.PopoverTrigger asChild>
                    <Button
                      id="date-picker"
                      variant="ghost"
                      className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                    >
                      <CalendarIcon className="size-3.5" />
                      <span className="sr-only">Select date</span>
                    </Button>
                  </Popover.PopoverTrigger>
                  <Popover.PopoverContent
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
                  </Popover.PopoverContent>
                </Popover.Popover>
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
        docLink="https://ui.shadcn.com/docs/components/card"
        zone={
          <>
            <Card.Card className="w-full max-w-sm">
              <Card.CardHeader>
                <Card.CardTitle>Login to your account</Card.CardTitle>
                <Card.CardDescription>
                  Enter your email below to login to your account
                </Card.CardDescription>
                <Card.CardAction>
                  <Button variant="link">Sign Up</Button>
                </Card.CardAction>
              </Card.CardHeader>
              <Card.CardContent>
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
              </Card.CardContent>
              <Card.CardFooter className="flex-col gap-[5px]">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </Card.CardFooter>
            </Card.Card>
            <Card.Card className="w-[500px]">
              <Card.CardHeader>
                <Card.CardTitle>Card Title</Card.CardTitle>
                <Card.CardDescription>Card Description</Card.CardDescription>
                <Card.CardAction>Card Action</Card.CardAction>
              </Card.CardHeader>
              <Card.CardContent>
                <p>Card Content</p>
              </Card.CardContent>
              <Card.CardFooter>
                <p>Card Footer</p>
              </Card.CardFooter>
            </Card.Card>
          </>
        }
      />

      <TestBlock
        title="Carousel"
        docLink="https://ui.shadcn.com/docs/components/carousel"
        zone={
          <>
            <Carousel.Carousel className="w-[50%]">
              <Carousel.CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.CarouselItem key={index}>
                    <div className="p-1">
                      <Card.Card>
                        <Card.CardContent className="flex aspect-square items-center justify-center p-2">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                            {"  "}no loop
                          </span>
                        </Card.CardContent>
                      </Card.Card>
                    </div>
                  </Carousel.CarouselItem>
                ))}
              </Carousel.CarouselContent>
              <Carousel.CarouselPrevious />
              <Carousel.CarouselNext />
            </Carousel.Carousel>
            <Carousel.Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-[50%]"
            >
              <Carousel.CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.CarouselItem key={index}>
                    <div className="p-1">
                      <Card.Card>
                        <Card.CardContent className="flex aspect-square items-center justify-center p-2">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                            {"  "}loop
                          </span>
                        </Card.CardContent>
                      </Card.Card>
                    </div>
                  </Carousel.CarouselItem>
                ))}
              </Carousel.CarouselContent>
              <Carousel.CarouselPrevious />
              <Carousel.CarouselNext />
            </Carousel.Carousel>
          </>
        }
      />

      <TestBlock
        title="Chart"
        docLink="https://ui.shadcn.com/docs/components/chart"
        note="There is supposed to be a chart here, but for some reason, it is invisible."
        zone={
          <Chart.ChartContainer
            config={chartConfig}
            className="min-h-[200px] w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Chart.ChartTooltip content={<Chart.ChartTooltipContent />} />
              <Chart.ChartLegend content={<Chart.ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </Chart.ChartContainer>
        }
      />

      <TestBlock
        title="Checkbox"
        docLink="https://ui.shadcn.com/docs/components/checkbox"
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
        docLink="https://ui.shadcn.com/docs/components/collapsible"
        zone={
          <Collapsible.Collapsible>
            <Collapsible.CollapsibleTrigger>
              Can I use this in my project?
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </Collapsible.CollapsibleContent>
          </Collapsible.Collapsible>
        }
      />

      <TestBlock
        title="Context Menu"
        docLink="https://ui.shadcn.com/docs/components/context-menu"
        zone={
          <ContextMenu.ContextMenu>
            <ContextMenu.ContextMenuTrigger>
              Right Click Here
            </ContextMenu.ContextMenuTrigger>
            <ContextMenu.ContextMenuContent>
              <ContextMenu.ContextMenuItem>Profile</ContextMenu.ContextMenuItem>
              <ContextMenu.ContextMenuItem>Billing</ContextMenu.ContextMenuItem>
              <ContextMenu.ContextMenuItem>Team</ContextMenu.ContextMenuItem>
              <ContextMenu.ContextMenuItem>
                Subscription
              </ContextMenu.ContextMenuItem>
            </ContextMenu.ContextMenuContent>
          </ContextMenu.ContextMenu>
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
        docLink="https://ui.shadcn.com/docs/components/dialog"
        zone={
          <>
            <Dialog.Dialog>
              <Dialog.DialogTrigger>Dialog trigger</Dialog.DialogTrigger>
              <Dialog.DialogContent>
                <Dialog.DialogHeader>
                  <Dialog.DialogTitle>Dialog title</Dialog.DialogTitle>
                  <Dialog.DialogDescription>
                    Dialog descritpion
                  </Dialog.DialogDescription>
                </Dialog.DialogHeader>
              </Dialog.DialogContent>
            </Dialog.Dialog>
            <Dialog.Dialog>
              <form>
                <Dialog.DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </Dialog.DialogTrigger>
                <Dialog.DialogContent className="sm:max-w-[425px]">
                  <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Edit profile</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </Dialog.DialogDescription>
                  </Dialog.DialogHeader>
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
                  <Dialog.DialogFooter className="flex-row justify-end gap-[7px] py-[10px]">
                    <Dialog.DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.DialogClose>
                    <Button type="submit">Save changes</Button>
                  </Dialog.DialogFooter>
                </Dialog.DialogContent>
              </form>
            </Dialog.Dialog>
          </>
        }
      />

      <TestBlock
        title="Drawer"
        docLink="https://ui.shadcn.com/docs/components/drawer"
        note="I could not get this component to work. The drawer contents never even show up in the DOM."
        zone={
          <Drawer.Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Drawer.DrawerTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </Drawer.DrawerTrigger>
            <Drawer.DrawerContent>
              <Drawer.DrawerHeader className="text-left">
                <Drawer.DrawerTitle>Edit profile</Drawer.DrawerTitle>
                <Drawer.DrawerDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </Drawer.DrawerDescription>
              </Drawer.DrawerHeader>
              <div>hi</div>
              <Drawer.DrawerFooter className="pt-2">
                <Drawer.DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </Drawer.DrawerClose>
              </Drawer.DrawerFooter>
            </Drawer.DrawerContent>
          </Drawer.Drawer>
        }
      />

      <TestBlock
        title="Dropdown Menu"
        docLink="https://ui.shadcn.com/docs/components/dropdown-menu"
        note="see radix API documentation for properties that can be passed on to different components."
        zone={
          <DropdownMenu.DropdownMenu>
            <Button variant={"outline"} asChild>
              <DropdownMenu.DropdownMenuTrigger>
                Open
              </DropdownMenu.DropdownMenuTrigger>
            </Button>
            <DropdownMenu.DropdownMenuContent side="bottom" align={"start"}>
              <DropdownMenu.DropdownMenuLabel>
                My Account
              </DropdownMenu.DropdownMenuLabel>
              <DropdownMenu.DropdownMenuSeparator />
              <DropdownMenu.DropdownMenuItem>
                Profile
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem>
                Billing
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem>
                Team
              </DropdownMenu.DropdownMenuItem>
              <DropdownMenu.DropdownMenuItem>
                Subscription
              </DropdownMenu.DropdownMenuItem>
            </DropdownMenu.DropdownMenuContent>
          </DropdownMenu.DropdownMenu>
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
        docLink="https://ui.shadcn.com/docs/components/hover-card"
        zone={
          <HoverCard.HoverCard>
            <HoverCard.HoverCardTrigger>Hover</HoverCard.HoverCardTrigger>
            <HoverCard.HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCard.HoverCardContent>
          </HoverCard.HoverCard>
        }
      />

      <TestBlock
        title="Input"
        docLink="https://ui.shadcn.com/docs/components/input"
        zone={<Input type="email" placeholder="Email" />}
      />

      <TestBlock
        title="Input OTP"
        docLink="https://ui.shadcn.com/docs/components/input-otp"
        zone={
          <InputOTP.InputOTP maxLength={6}>
            <InputOTP.InputOTPGroup>
              <InputOTP.InputOTPSlot index={0} />
              <InputOTP.InputOTPSlot index={1} />
              <InputOTP.InputOTPSlot index={2} />
            </InputOTP.InputOTPGroup>
            <InputOTP.InputOTPSeparator />
            <InputOTP.InputOTPGroup>
              <InputOTP.InputOTPSlot index={3} />
              <InputOTP.InputOTPSlot index={4} />
              <InputOTP.InputOTPSlot index={5} />
            </InputOTP.InputOTPGroup>
          </InputOTP.InputOTP>
        }
      />

      <TestBlock
        title="Label"
        docLink="https://ui.shadcn.com/docs/components/label"
        zone={
          <>
            <Input type="email" placeholder="Email" id="email" />
            <Label htmlFor="email">this is a label for that input above</Label>
          </>
        }
      />

      <TestBlock
        title="Menubar"
        docLink="https://ui.shadcn.com/docs/components/menubar"
        zone={
          <Menubar.Menubar>
            <Menubar.MenubarMenu>
              <Menubar.MenubarTrigger>File</Menubar.MenubarTrigger>
              <Menubar.MenubarContent side="bottom">
                <Menubar.MenubarItem>
                  New Tab <Menubar.MenubarShortcut>⌘T</Menubar.MenubarShortcut>
                </Menubar.MenubarItem>
                <Menubar.MenubarItem>New Window</Menubar.MenubarItem>
                <Menubar.MenubarSeparator />
                <Menubar.MenubarItem>Share</Menubar.MenubarItem>
                <Menubar.MenubarSeparator />
                <Menubar.MenubarItem>Print</Menubar.MenubarItem>
              </Menubar.MenubarContent>
            </Menubar.MenubarMenu>
          </Menubar.Menubar>
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
        docLink="https://ui.shadcn.com/docs/components/navigation-menu"
        zone={
          <NavigationMenu.NavigationMenu>
            <NavigationMenu.NavigationMenuList>
              <NavigationMenu.NavigationMenuItem>
                <NavigationMenu.NavigationMenuTrigger>
                  Item One
                </NavigationMenu.NavigationMenuTrigger>
                <NavigationMenu.NavigationMenuContent className="w-[200px]">
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                </NavigationMenu.NavigationMenuContent>
              </NavigationMenu.NavigationMenuItem>
              <NavigationMenu.NavigationMenuItem>
                <NavigationMenu.NavigationMenuTrigger>
                  Item Two
                </NavigationMenu.NavigationMenuTrigger>
                <NavigationMenu.NavigationMenuContent className="w-[200px]">
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                </NavigationMenu.NavigationMenuContent>
              </NavigationMenu.NavigationMenuItem>
              <NavigationMenu.NavigationMenuItem>
                <NavigationMenu.NavigationMenuTrigger>
                  Item Three
                </NavigationMenu.NavigationMenuTrigger>
                <NavigationMenu.NavigationMenuContent className="w-[200px]">
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                  <NavigationMenu.NavigationMenuLink>
                    Link
                  </NavigationMenu.NavigationMenuLink>
                </NavigationMenu.NavigationMenuContent>
              </NavigationMenu.NavigationMenuItem>
            </NavigationMenu.NavigationMenuList>
          </NavigationMenu.NavigationMenu>
        }
      />

      <TestBlock
        title="Pagination"
        docLink="https://ui.shadcn.com/docs/components/pagination"
        zone={
          <Pagination.Pagination>
            <Pagination.PaginationContent>
              <Pagination.PaginationItem>
                <Pagination.PaginationPrevious href="" />
              </Pagination.PaginationItem>
              <Pagination.PaginationItem>
                <Button variant={"outline"} asChild>
                  <Pagination.PaginationLink
                    style={{ textDecoration: "none" }}
                    href=""
                  >
                    1
                  </Pagination.PaginationLink>
                </Button>
              </Pagination.PaginationItem>
              <Pagination.PaginationItem>
                <Pagination.PaginationEllipsis />
              </Pagination.PaginationItem>
              <Pagination.PaginationItem>
                <Pagination.PaginationNext href="" />
              </Pagination.PaginationItem>
            </Pagination.PaginationContent>
          </Pagination.Pagination>
        }
      />

      <TestBlock
        title="Popover"
        docLink="https://ui.shadcn.com/docs/components/popover"
        zone={
          <Popover.Popover>
            <Popover.PopoverTrigger>Open</Popover.PopoverTrigger>
            <Popover.PopoverContent side="bottom">
              Place content for the popover here.
            </Popover.PopoverContent>
          </Popover.Popover>
        }
      />

      <TestBlock
        title="Progress"
        docLink="https://ui.shadcn.com/docs/components/progress"
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
        docLink="https://ui.shadcn.com/docs/components/radio-group"
        zone={
          <RadioGroup.RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroup.RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroup.RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup.RadioGroup>
        }
      />

      <TestBlock
        title="Resizable"
        docLink="https://ui.shadcn.com/docs/components/resizable"
        note="I think this is my favorite component of them all."
        zone={
          <>
            <Resizable.ResizablePanelGroup direction="horizontal">
              <Resizable.ResizablePanel>One</Resizable.ResizablePanel>
              <Resizable.ResizableHandle />
              <Resizable.ResizablePanel>Two</Resizable.ResizablePanel>
            </Resizable.ResizablePanelGroup>

            <Resizable.ResizablePanelGroup
              direction="horizontal"
              className="max-w-md rounded-lg border md:min-w-[450px]"
            >
              <Resizable.ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="font-semibold">One</span>
                </div>
              </Resizable.ResizablePanel>
              <Resizable.ResizableHandle />
              <Resizable.ResizablePanel defaultSize={50}>
                <Resizable.ResizablePanelGroup direction="vertical">
                  <Resizable.ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </Resizable.ResizablePanel>
                  <Resizable.ResizableHandle />
                  <Resizable.ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Three</span>
                    </div>
                  </Resizable.ResizablePanel>
                </Resizable.ResizablePanelGroup>
              </Resizable.ResizablePanel>
            </Resizable.ResizablePanelGroup>
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
        docLink="https://ui.shadcn.com/docs/components/scroll-area"
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
        docLink="https://ui.shadcn.com/docs/components/select"
        zone={
          <Select.Select>
            <Select.SelectTrigger className="w-[180px]">
              <Select.SelectValue placeholder="Select a fruit" />
            </Select.SelectTrigger>
            <Select.SelectContent>
              <Select.SelectGroup>
                <Select.SelectLabel>Fruits</Select.SelectLabel>
                <Select.SelectItem value="apple">Apple</Select.SelectItem>
                <Select.SelectItem value="banana">Banana</Select.SelectItem>
                <Select.SelectItem value="blueberry">
                  Blueberry
                </Select.SelectItem>
                <Select.SelectItem value="grapes">Grapes</Select.SelectItem>
                <Select.SelectItem value="pineapple">
                  Pineapple
                </Select.SelectItem>
              </Select.SelectGroup>
            </Select.SelectContent>
          </Select.Select>
        }
      />

      <TestBlock title="Separator" docLink="https://ui.shadcn.com/docs/components/separator" zone={<Separator />} />

      <TestBlock
        title="Sheet"
        docLink="https://ui.shadcn.com/docs/components/sheet"
        note="This has the same structure as the Drawer component. Needs further tweaking to get it to display."
        zone={
          <Sheet.Sheet>
            <Sheet.SheetTrigger asChild>
              <Button variant="outline">Open</Button>
            </Sheet.SheetTrigger>
            <Sheet.SheetContent>
              <Sheet.SheetHeader>
                <Sheet.SheetTitle>Edit profile</Sheet.SheetTitle>
                <Sheet.SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </Sheet.SheetDescription>
              </Sheet.SheetHeader>
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
              <Sheet.SheetFooter>
                <Button type="submit">Save changes</Button>
                <Sheet.SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </Sheet.SheetClose>
              </Sheet.SheetFooter>
            </Sheet.SheetContent>
          </Sheet.Sheet>
        }
      />

      <TestBlock
        title="Skeleton"
        docLink="https://ui.shadcn.com/docs/components/skeleton"
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
        docLink="https://ui.shadcn.com/docs/components/slider"
        note="Look into connecting to a variable"
        zone={<Slider defaultValue={[50]} max={100} step={1} />}
      />

      <TestBlock
        title="Switch"
        docLink="https://ui.shadcn.com/docs/components/slider"
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

export function ShadT() {
  const [input, setInput] = useState("");
  return (
    <div className="page-body testing">
      <TestBlock
        title="Tabs"
        docLink="https://ui.shadcn.com/docs/components/tabs"
        zone={
          <Tabs.Tabs defaultValue="t1" className="w-full">
            <Tabs.TabsList>
              <Tabs.TabsTrigger value="t1">tab 1 trigger</Tabs.TabsTrigger>
              <Tabs.TabsTrigger value="t2">tab 2 trigger</Tabs.TabsTrigger>
            </Tabs.TabsList>
            <Tabs.TabsContent value="t1">Tab one content</Tabs.TabsContent>
            <Tabs.TabsContent value="t2">Tab two content</Tabs.TabsContent>
          </Tabs.Tabs>
        }
      />

      <TestBlock
        title="Text Area"
        docLink="https://ui.shadcn.com/docs/components/textarea"
        zone={
          <>
            <p>input: {input}</p>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="placeholder"
            />
          </>
        }
        note="Connect a variable by having a state variable and then using onChange."
      />
      <TestBlock
        title="Toggle"
        docLink="https://ui.shadcn.com/docs/components/toggle"
        zone={<Toggle>Toggle</Toggle>}
      />

      <TestBlock
        title="Toggle Group"
        docLink="https://ui.shadcn.com/docs/components/toggle-group"
        zone={
          <ToggleGroup.ToggleGroup variant="outline" type="multiple">
            <ToggleGroup.ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroup.ToggleGroupItem>
            <ToggleGroup.ToggleGroupItem
              value="italic"
              aria-label="Toggle italic"
            >
              <Italic className="h-4 w-4" />
            </ToggleGroup.ToggleGroupItem>
            <ToggleGroup.ToggleGroupItem
              value="strikethrough"
              aria-label="Toggle strikethrough"
            >
              <Underline className="h-4 w-4" />
            </ToggleGroup.ToggleGroupItem>
          </ToggleGroup.ToggleGroup>
        }
      />

      <TestBlock
        title="Tooltip"
        docLink="https://ui.shadcn.com/docs/components/tooltip"
        zone={
          <Tooltip.Tooltip>
            <Tooltip.TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </Tooltip.TooltipTrigger>
            <Tooltip.TooltipContent>
              <p>Add to library</p>
            </Tooltip.TooltipContent>
          </Tooltip.Tooltip>
        }
      />
    </div>
  );
}
