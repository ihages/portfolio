"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css";

import React, { ReactNode, useEffect, useState } from "react";
import { TestCompare } from "@/components/testblock";
import * as mui from "@mui/material";
import theme from "@/utils/mui-theme";

// Lucide Icons
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

// MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircularProgress from "@mui/material/CircularProgress";

// Shad UI Components
import * as Accordion from "@/components/ui/accordion";
import * as Alert from "@/components/ui/alert";
import * as AlertDialog from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as Avatar from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import * as Breadcrumb from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import * as Card from "@/components/ui/card";
import * as Carousel from "@/components/ui/carousel";
import * as Chart from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import * as Collapsible from "@/components/ui/collapsible";
import * as ContextMenu from "@/components/ui/context-menu";
import * as Dialog from "@/components/ui/dialog";
import * as Drawer from "@/components/ui/drawer";
import * as DropdownMenu from "@/components/ui/dropdown-menu";
import * as HoverCard from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import * as InputOTP from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import * as Menubar from "@/components/ui/menubar";
import * as NavigationMenu from "@/components/ui/navigation-menu";
import * as Pagination from "@/components/ui/pagination";
import * as Popover from "@/components/ui/popover";
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

export function ComparisonA() {
  return (
    <div className="page-body testing">
      <TestCompare
        title="Accordion"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/accordion",
            zone: (
              <Accordion.Accordion type="single" collapsible className="w-full">
                <Accordion.AccordionItem value="item-1">
                  <Accordion.AccordionTrigger>Section 1</Accordion.AccordionTrigger>
                  <Accordion.AccordionContent>Content 1</Accordion.AccordionContent>
                </Accordion.AccordionItem>
                <Accordion.AccordionItem value="item-2">
                  <Accordion.AccordionTrigger>Section 2</Accordion.AccordionTrigger>
                  <Accordion.AccordionContent>Content 2</Accordion.AccordionContent>
                </Accordion.AccordionItem>
              </Accordion.Accordion>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-accordion/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <div>
                  <mui.Accordion>
                    <mui.AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <mui.Typography>Section 1</mui.Typography>
                    </mui.AccordionSummary>
                    <mui.AccordionDetails>Content 1</mui.AccordionDetails>
                  </mui.Accordion>
                  <mui.Accordion>
                    <mui.AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <mui.Typography>Section 2</mui.Typography>
                    </mui.AccordionSummary>
                    <mui.AccordionDetails>Content 2</mui.AccordionDetails>
                  </mui.Accordion>
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Alert"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/alert",
            zone: (
              <div className="flex flex-col gap-2">
                <Alert.Alert>
                  <CheckCircle2Icon className="h-4 w-4" />
                  <Alert.AlertTitle>Success</Alert.AlertTitle>
                  <Alert.AlertDescription>Your changes have been saved.</Alert.AlertDescription>
                </Alert.Alert>
                <Alert.Alert variant="destructive">
                  <AlertCircleIcon className="h-4 w-4" />
                  <Alert.AlertTitle>Error</Alert.AlertTitle>
                  <Alert.AlertDescription>Something went wrong.</Alert.AlertDescription>
                </Alert.Alert>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-alert/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <div className="flex flex-col gap-2">
                  <mui.Alert severity="success">Your changes have been saved.</mui.Alert>
                  <mui.Alert severity="error">Something went wrong.</mui.Alert>
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Alert Dialog"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/alert-dialog",
            zone: (
              <AlertDialog.AlertDialog>
                <AlertDialog.AlertDialogTrigger asChild>
                  <Button variant="outline">Show Alert</Button>
                </AlertDialog.AlertDialogTrigger>
                <AlertDialog.AlertDialogContent>
                  <AlertDialog.AlertDialogHeader>
                    <AlertDialog.AlertDialogTitle>Are you sure?</AlertDialog.AlertDialogTitle>
                    <AlertDialog.AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialog.AlertDialogDescription>
                  </AlertDialog.AlertDialogHeader>
                  <AlertDialog.AlertDialogFooter>
                    <AlertDialog.AlertDialogCancel>Cancel</AlertDialog.AlertDialogCancel>
                    <AlertDialog.AlertDialogAction>Continue</AlertDialog.AlertDialogAction>
                  </AlertDialog.AlertDialogFooter>
                </AlertDialog.AlertDialogContent>
              </AlertDialog.AlertDialog>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Avatar"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/avatar",
            zone: (
              <div className="flex gap-2">
                <Avatar.Avatar>
                  <Avatar.AvatarImage src="https://github.com/ihages.png" />
                  <Avatar.AvatarFallback>IH</Avatar.AvatarFallback>
                </Avatar.Avatar>
                <Avatar.Avatar>
                  <Avatar.AvatarFallback>AB</Avatar.AvatarFallback>
                </Avatar.Avatar>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-avatar/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <div className="flex gap-2">
                  <mui.Avatar src="https://github.com/ihages.png" />
                  <mui.Avatar>AB</mui.Avatar>
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
    </div>
  );
}

export function ComparisonB() {
  const [openBackdrop, setOpenBackdrop] = useState(false);

  return (
    <div className="page-body testing">
      <TestCompare
        title="Badge"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/badge",
            zone: (
              <div className="flex gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Backdrop"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-backdrop/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <Button onClick={() => setOpenBackdrop(true)}>Show Backdrop</Button>
                <mui.Backdrop
                  sx={{ color: '#fff', zIndex: 9999 }}
                  open={openBackdrop}
                  onClick={() => setOpenBackdrop(false)}
                >
                  <CircularProgress color="inherit" />
                </mui.Backdrop>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Bottom Navigation"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-bottom-navigation/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <mui.BottomNavigation showLabels>
                  <mui.BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                  <mui.BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                  <mui.BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </mui.BottomNavigation>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Box"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-box/",
            zone: (
              <mui.Box sx={{ p: 2, border: '1px dashed grey' }}>
                This is a Box component
              </mui.Box>
            ),
          },
        ]}
      />

      <TestCompare
        title="Breadcrumb"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/breadcrumb",
            zone: (
              <Breadcrumb.Breadcrumb>
                <Breadcrumb.BreadcrumbList>
                  <Breadcrumb.BreadcrumbItem>
                    <Breadcrumb.BreadcrumbLink href="/">Home</Breadcrumb.BreadcrumbLink>
                  </Breadcrumb.BreadcrumbItem>
                  <Breadcrumb.BreadcrumbSeparator />
                  <Breadcrumb.BreadcrumbItem>
                    <Breadcrumb.BreadcrumbPage>Current</Breadcrumb.BreadcrumbPage>
                  </Breadcrumb.BreadcrumbItem>
                </Breadcrumb.BreadcrumbList>
              </Breadcrumb.Breadcrumb>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Button"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/button",
            zone: (
              <div className="flex gap-2">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-button/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <div className="flex gap-2">
                  <mui.Button variant="contained">Contained</mui.Button>
                  <mui.Button variant="outlined">Outlined</mui.Button>
                  <mui.Button variant="text">Text</mui.Button>
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Button Group"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-button-group/",
            zone: (
              <mui.ThemeProvider theme={theme()}>
                <mui.ButtonGroup variant="contained">
                  <mui.Button>One</mui.Button>
                  <mui.Button>Two</mui.Button>
                  <mui.Button>Three</mui.Button>
                </mui.ButtonGroup>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
    </div>
  );
}

export function ComparisonC() {
  const [date, setDate] = useState<Date>();
  const [checked, setChecked] = useState(false);

  return (
    <div className="page-body testing">
      <TestCompare
        title="Calendar"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/calendar",
            zone: (
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
              />
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Card"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/card",
            zone: (
              <Card.Card className="w-[300px]">
                <Card.CardHeader>
                  <Card.CardTitle>Card Title</Card.CardTitle>
                  <Card.CardDescription>Card description</Card.CardDescription>
                </Card.CardHeader>
                <Card.CardContent>
                  <p>Card content goes here.</p>
                </Card.CardContent>
              </Card.Card>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Carousel"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/carousel",
            zone: (
              <Carousel.Carousel className="w-[200px]">
                <Carousel.CarouselContent>
                  {[1, 2, 3].map((num) => (
                    <Carousel.CarouselItem key={num}>
                      <Card.Card>
                        <Card.CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">{num}</span>
                        </Card.CardContent>
                      </Card.Card>
                    </Carousel.CarouselItem>
                  ))}
                </Carousel.CarouselContent>
                <Carousel.CarouselPrevious />
                <Carousel.CarouselNext />
              </Carousel.Carousel>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Checkbox"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/checkbox",
            zone: (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="shad-check"
                  checked={checked}
                  onCheckedChange={(checked) => setChecked(checked === true)}
                />
                <Label htmlFor="shad-check">Accept terms</Label>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Collapsible"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/collapsible",
            zone: (
              <Collapsible.Collapsible>
                <Collapsible.CollapsibleTrigger>
                  Can I use this?
                </Collapsible.CollapsibleTrigger>
                <Collapsible.CollapsibleContent>
                  Yes, free to use for personal and commercial projects.
                </Collapsible.CollapsibleContent>
              </Collapsible.Collapsible>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Context Menu"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/context-menu",
            zone: (
              <ContextMenu.ContextMenu>
                <ContextMenu.ContextMenuTrigger>
                  Right click here
                </ContextMenu.ContextMenuTrigger>
                <ContextMenu.ContextMenuContent>
                  <ContextMenu.ContextMenuItem>Profile</ContextMenu.ContextMenuItem>
                  <ContextMenu.ContextMenuItem>Settings</ContextMenu.ContextMenuItem>
                </ContextMenu.ContextMenuContent>
              </ContextMenu.ContextMenu>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}

export function ComparisonD() {
  return (
    <div className="page-body testing">
      <TestCompare
        title="Dialog"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/dialog",
            zone: (
              <Dialog.Dialog>
                <Dialog.DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </Dialog.DialogTrigger>
                <Dialog.DialogContent>
                  <Dialog.DialogHeader>
                    <Dialog.DialogTitle>Dialog Title</Dialog.DialogTitle>
                    <Dialog.DialogDescription>
                      This is a dialog description.
                    </Dialog.DialogDescription>
                  </Dialog.DialogHeader>
                </Dialog.DialogContent>
              </Dialog.Dialog>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Drawer"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/drawer",
            zone: (
              <Drawer.Drawer>
                <Drawer.DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </Drawer.DrawerTrigger>
                <Drawer.DrawerContent>
                  <Drawer.DrawerHeader>
                    <Drawer.DrawerTitle>Drawer Title</Drawer.DrawerTitle>
                  </Drawer.DrawerHeader>
                </Drawer.DrawerContent>
              </Drawer.Drawer>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Dropdown Menu"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/dropdown-menu",
            zone: (
              <DropdownMenu.DropdownMenu>
                <DropdownMenu.DropdownMenuTrigger asChild>
                  <Button variant="outline">Menu</Button>
                </DropdownMenu.DropdownMenuTrigger>
                <DropdownMenu.DropdownMenuContent>
                  <DropdownMenu.DropdownMenuItem>Profile</DropdownMenu.DropdownMenuItem>
                  <DropdownMenu.DropdownMenuItem>Settings</DropdownMenu.DropdownMenuItem>
                </DropdownMenu.DropdownMenuContent>
              </DropdownMenu.DropdownMenu>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}

export function ComparisonHI() {
  return (
    <div className="page-body testing">
      <TestCompare
        title="Hover Card"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/hover-card",
            zone: (
              <HoverCard.HoverCard>
                <HoverCard.HoverCardTrigger>Hover me</HoverCard.HoverCardTrigger>
                <HoverCard.HoverCardContent>
                  This content appears on hover.
                </HoverCard.HoverCardContent>
              </HoverCard.HoverCard>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Input"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/input",
            zone: <Input type="email" placeholder="Enter email" />,
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Input OTP"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/input-otp",
            zone: (
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
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}

export function ComparisonLMN() {
  return (
    <div className="page-body testing">
      <TestCompare
        title="Label"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/label",
            zone: (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Menubar"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/menubar",
            zone: (
              <Menubar.Menubar>
                <Menubar.MenubarMenu>
                  <Menubar.MenubarTrigger>File</Menubar.MenubarTrigger>
                  <Menubar.MenubarContent>
                    <Menubar.MenubarItem>New</Menubar.MenubarItem>
                    <Menubar.MenubarItem>Open</Menubar.MenubarItem>
                  </Menubar.MenubarContent>
                </Menubar.MenubarMenu>
              </Menubar.Menubar>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Navigation Menu"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/navigation-menu",
            zone: (
              <NavigationMenu.NavigationMenu>
                <NavigationMenu.NavigationMenuList>
                  <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuTrigger>
                      Getting started
                    </NavigationMenu.NavigationMenuTrigger>
                    <NavigationMenu.NavigationMenuContent>
                      <NavigationMenu.NavigationMenuLink>
                        Introduction
                      </NavigationMenu.NavigationMenuLink>
                    </NavigationMenu.NavigationMenuContent>
                  </NavigationMenu.NavigationMenuItem>
                </NavigationMenu.NavigationMenuList>
              </NavigationMenu.NavigationMenu>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}

export function ComparisonPRS() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-body testing">
      <TestCompare
        title="Pagination"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/pagination",
            zone: (
              <Pagination.Pagination>
                <Pagination.PaginationContent>
                  <Pagination.PaginationItem>
                    <Pagination.PaginationPrevious href="#" />
                  </Pagination.PaginationItem>
                  <Pagination.PaginationItem>
                    <Pagination.PaginationLink href="#">1</Pagination.PaginationLink>
                  </Pagination.PaginationItem>
                  <Pagination.PaginationItem>
                    <Pagination.PaginationNext href="#" />
                  </Pagination.PaginationItem>
                </Pagination.PaginationContent>
              </Pagination.Pagination>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Popover"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/popover",
            zone: (
              <Popover.Popover>
                <Popover.PopoverTrigger asChild>
                  <Button variant="outline">Open popover</Button>
                </Popover.PopoverTrigger>
                <Popover.PopoverContent>
                  Place content for the popover here.
                </Popover.PopoverContent>
              </Popover.Popover>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Progress"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/progress",
            zone: <Progress value={progress} className="w-[60%]" />,
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Radio Group"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/radio-group",
            zone: (
              <RadioGroup.RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroup.RadioGroupItem value="option-one" id="r1" />
                  <Label htmlFor="r1">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroup.RadioGroupItem value="option-two" id="r2" />
                  <Label htmlFor="r2">Option Two</Label>
                </div>
              </RadioGroup.RadioGroup>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Resizable"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/resizable",
            zone: (
              <Resizable.ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
                <Resizable.ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                  </div>
                </Resizable.ResizablePanel>
                <Resizable.ResizableHandle />
                <Resizable.ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                  </div>
                </Resizable.ResizablePanel>
              </Resizable.ResizablePanelGroup>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Select"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/select",
            zone: (
              <Select.Select>
                <Select.SelectTrigger className="w-[180px]">
                  <Select.SelectValue placeholder="Select a fruit" />
                </Select.SelectTrigger>
                <Select.SelectContent>
                  <Select.SelectItem value="apple">Apple</Select.SelectItem>
                  <Select.SelectItem value="banana">Banana</Select.SelectItem>
                  <Select.SelectItem value="orange">Orange</Select.SelectItem>
                </Select.SelectContent>
              </Select.Select>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Separator"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/separator",
            zone: (
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                  <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Sheet"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/sheet",
            zone: (
              <Sheet.Sheet>
                <Sheet.SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </Sheet.SheetTrigger>
                <Sheet.SheetContent>
                  <Sheet.SheetHeader>
                    <Sheet.SheetTitle>Edit profile</Sheet.SheetTitle>
                    <Sheet.SheetDescription>
                      Make changes to your profile here.
                    </Sheet.SheetDescription>
                  </Sheet.SheetHeader>
                </Sheet.SheetContent>
              </Sheet.Sheet>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Skeleton"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/skeleton",
            zone: (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Slider"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/slider",
            zone: <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />,
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Switch"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/switch",
            zone: (
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}

export function ComparisonT() {
  const [input, setInput] = useState("");

  return (
    <div className="page-body testing">
      <TestCompare
        title="Tabs"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/tabs",
            zone: (
              <Tabs.Tabs defaultValue="account" className="w-[400px]">
                <Tabs.TabsList>
                  <Tabs.TabsTrigger value="account">Account</Tabs.TabsTrigger>
                  <Tabs.TabsTrigger value="password">Password</Tabs.TabsTrigger>
                </Tabs.TabsList>
                <Tabs.TabsContent value="account">
                  Make changes to your account here.
                </Tabs.TabsContent>
                <Tabs.TabsContent value="password">
                  Change your password here.
                </Tabs.TabsContent>
              </Tabs.Tabs>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Textarea"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/textarea",
            zone: (
              <Textarea
                placeholder="Type your message here."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Toggle"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/toggle",
            zone: <Toggle aria-label="Toggle italic">Toggle</Toggle>,
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Toggle Group"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/toggle-group",
            zone: (
              <ToggleGroup.ToggleGroup type="multiple">
                <ToggleGroup.ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
                <ToggleGroup.ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
                <ToggleGroup.ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
              </ToggleGroup.ToggleGroup>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />

      <TestCompare
        title="Tooltip"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/tooltip",
            zone: (
              <Tooltip.Tooltip>
                <Tooltip.TooltipTrigger asChild>
                  <Button variant="outline">Hover</Button>
                </Tooltip.TooltipTrigger>
                <Tooltip.TooltipContent>
                  <p>Add to library</p>
                </Tooltip.TooltipContent>
              </Tooltip.Tooltip>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: <div className="text-muted-foreground">No direct equivalent</div>,
          },
        ]}
      />
    </div>
  );
}