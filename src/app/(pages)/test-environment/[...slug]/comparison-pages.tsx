"use client";

import { Button } from "@/components/ui/button";
import "./style.css";
import "../style.css";

import React, { ReactNode, useEffect, useState } from "react";
import { TestCompare } from "@/components/testblock";
import * as mui from "@mui/material";
import { useTheme } from "@/utils/mui-theme";

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
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckIcon from "@mui/icons-material/Check";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloseIcon from "@mui/icons-material/Close";

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
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

export function ComparisonDataDisplay() {
  const currentTheme = useTheme();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="page-body testing">
      <TestCompare
        title="Avatar"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/avatar",
            zone: (
              <div className="flex gap-[5px]">
                <Avatar.Avatar className="size-[50px]">
                  <Avatar.AvatarImage src="https://github.com/ihages.png" />
                  <Avatar.AvatarFallback>IH</Avatar.AvatarFallback>
                </Avatar.Avatar>
                <Avatar.Avatar className="size-[50px]">
                  <Avatar.AvatarFallback>AB</Avatar.AvatarFallback>
                </Avatar.Avatar>
              </div>
            ),
            note: "Size by default is 100%. Changing the username in the image src will return different icons.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-avatar/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[5px] flex-col justify-center">
                  <div className="flex gap-[5px]">
                    <mui.Avatar
                      alt="Isabelle Hageman"
                      src="https://github.com/ihages.png"
                    />
                    <mui.Avatar alt="Travis Howard" src="" />
                    <mui.Avatar>AB</mui.Avatar>
                  </div>
                  <div className="flex gap-[5px]">
                    <mui.Avatar
                      alt="Small"
                      src="https://github.com/ihages.png"
                      sx={{ width: 24, height: 24 }}
                    />
                    <mui.Avatar
                      alt="Medium"
                      src="https://github.com/ihages.png"
                    />
                    <mui.Avatar
                      alt="Large"
                      src="https://github.com/ihages.png"
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                </div>
              </mui.ThemeProvider>
            ),
            note: "Size by default is 40px. If images aren't known, initials come from the alt text. Multiple size options available.",
          },
        ]}
      />

      <TestCompare
        title="Badge"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/badge",
            zone: (
              <div className="flex gap-[5px]">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-badge/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[5px] items-center">
                  <mui.Badge badgeContent={4} color="primary">
                    <MailIcon color="action" />
                  </mui.Badge>
                  <mui.Badge badgeContent={99} color="secondary">
                    <MailIcon color="action" />
                  </mui.Badge>
                  <mui.Badge variant="dot" color="primary">
                    <MailIcon color="action" />
                  </mui.Badge>
                </div>
              </mui.ThemeProvider>
            ),
            note: "MUI badges are notification badges that overlay content, different from Shad's text badges.",
          },
        ]}
      />

      <TestCompare
        title="Chip"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-chip/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[5px] flex-wrap">
                  <mui.Chip label="Chip Filled" />
                  <mui.Chip label="Chip Outlined" variant="outlined" />
                  <mui.Chip label="Deletable" onDelete={handleDelete} />
                  <mui.Chip
                    label="Deletable Outlined"
                    variant="outlined"
                    onDelete={handleDelete}
                  />
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Divider (Separator)"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/separator",
            zone: (
              <div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                  </h4>
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
            docLink: "https://mui.com/material-ui/react-divider/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-col gap-[10px]">
                  <mui.List className="w-full" aria-label="mailbox folders">
                    <mui.ListItem>
                      <mui.ListItemText primary="Inbox" />
                    </mui.ListItem>
                    <mui.Divider component="li">
                      <mui.Chip label="inline chip" size="small" />
                    </mui.Divider>
                    <mui.ListItem>
                      <mui.ListItemText primary="Drafts" />
                    </mui.ListItem>
                    <mui.Divider component="li" />
                    <mui.ListItem>
                      <mui.ListItemText primary="Trash" />
                    </mui.ListItem>
                  </mui.List>
                  <div className="h-[50px] flex">
                    <FormatBoldIcon />
                    <mui.Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <FormatItalicIcon />
                  </div>
                </div>
              </mui.ThemeProvider>
            ),
            note: "Same as ShadCN's separator component. Includes horizontal and vertical orientations with chip integration.",
          },
        ]}
      />

      <TestCompare
        title="List"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-list/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.List>
                  <mui.ListItem disablePadding>
                    <mui.ListItemButton>
                      <mui.ListItemIcon>
                        <InboxIcon />
                      </mui.ListItemIcon>
                      <mui.ListItemText primary="Inbox" />
                    </mui.ListItemButton>
                  </mui.ListItem>
                  <mui.ListItem disablePadding>
                    <mui.ListItemButton>
                      <mui.ListItemIcon>
                        <DraftsIcon />
                      </mui.ListItemIcon>
                      <mui.ListItemText primary="Drafts" />
                    </mui.ListItemButton>
                  </mui.ListItem>
                </mui.List>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Table"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">
                No direct equivalent - use Tanstack Table
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-table/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.TableContainer component={mui.Paper}>
                  <mui.Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <mui.TableHead>
                      <mui.TableRow>
                        <mui.TableCell>Dessert (100g serving)</mui.TableCell>
                        <mui.TableCell align="right">Calories</mui.TableCell>
                        <mui.TableCell align="right">
                          Fat&nbsp;(g)
                        </mui.TableCell>
                        <mui.TableCell align="right">
                          Carbs&nbsp;(g)
                        </mui.TableCell>
                        <mui.TableCell align="right">
                          Protein&nbsp;(g)
                        </mui.TableCell>
                      </mui.TableRow>
                    </mui.TableHead>
                    <mui.TableBody>
                      {rows.map((row) => (
                        <mui.TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <mui.TableCell component="th" scope="row">
                            {row.name}
                          </mui.TableCell>
                          <mui.TableCell align="right">
                            {row.calories}
                          </mui.TableCell>
                          <mui.TableCell align="right">{row.fat}</mui.TableCell>
                          <mui.TableCell align="right">
                            {row.carbs}
                          </mui.TableCell>
                          <mui.TableCell align="right">
                            {row.protein}
                          </mui.TableCell>
                        </mui.TableRow>
                      ))}
                    </mui.TableBody>
                  </mui.Table>
                </mui.TableContainer>
              </mui.ThemeProvider>
            ),
            note: "Not a Tanstack table. Very nice looking. Sorting requires custom logic. Has sticky header and pagination options.",
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
            docLink: "https://mui.com/material-ui/react-tooltip/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Tooltip title="Delete">
                  <mui.IconButton>
                    <DeleteIcon />
                  </mui.IconButton>
                </mui.Tooltip>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
    </div>
  );
}
export function ComparisonInputs() {
  const [date, setDate] = useState<Date>();
  const [checked, setChecked] = useState([false, false]);
  const CheckboxLabel = { inputProps: { "aria-label": "Checkbox demo" } };
  const [volume, setVolume] = React.useState(30);
  const [rating, setRating] = React.useState<number | null>(2);
  const [age, setAge] = React.useState("");
  const [toggleSelected, setToggleSelected] = React.useState<boolean>(false);

  const [progress, setProgress] = useState(13);
  const [formats, setFormats] = React.useState(["bold"]);

  const handleVolume = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };
  const handleAgeChange = (event: mui.SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const switchLabel = { inputProps: { "aria-label": "Switch demo" } };

  function not(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => !b.includes(value));
  }

  function intersection(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.includes(value));
  }
  const currentTheme = useTheme();
  function TransferList() {
    const [trChecked, setTrChecked] = React.useState<readonly number[]>([]);
    const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
    const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

    const leftChecked: readonly number[] = intersection(trChecked, left);
    const rightChecked: readonly number[] = intersection(trChecked, right);

    const handleToggle = (value: number) => () => {
      const currentIndex = trChecked.indexOf(value);
      const newChecked = [...trChecked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setTrChecked(newChecked);
    };

    const handleAllRight = () => {
      setRight(right.concat(left));
      setLeft([]);
    };

    const handleCheckedRight = () => {
      setRight(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setTrChecked(not(trChecked, leftChecked));
    };

    const handleCheckedLeft = () => {
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      setTrChecked(not(trChecked, rightChecked));
    };

    const handleAllLeft = () => {
      setLeft(left.concat(right));
      setRight([]);
    };

    const customList = (items: readonly number[]) => (
      <mui.Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
        <mui.List dense component="div" role="list">
          {items.map((value: number) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <mui.ListItemButton
                key={value}
                role="listitem"
                onClick={handleToggle(value)}
              >
                <mui.ListItemIcon>
                  <mui.Checkbox
                    checked={trChecked.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </mui.ListItemIcon>
                <mui.ListItemText
                  id={labelId}
                  primary={`List item ${value + 1}`}
                />
              </mui.ListItemButton>
            );
          })}
        </mui.List>
      </mui.Paper>
    );

    return (
      <mui.ThemeProvider theme={currentTheme}>
        <mui.Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <mui.Grid>{customList(left)}</mui.Grid>
          <mui.Grid>
            <mui.Grid
              container
              direction="column"
              sx={{ alignItems: "center" }}
            >
              <mui.Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllRight}
                disabled={left.length === 0}
                aria-label="move all right"
              >
                ≫
              </mui.Button>
              <mui.Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right"
              >
                &gt;
              </mui.Button>
              <mui.Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left"
              >
                &lt;
              </mui.Button>
              <mui.Button
                sx={{ my: 0.5 }}
                variant="outlined"
                size="small"
                onClick={handleAllLeft}
                disabled={right.length === 0}
                aria-label="move all left"
              >
                ≪
              </mui.Button>
            </mui.Grid>
          </mui.Grid>
          <mui.Grid>{customList(right)}</mui.Grid>
        </mui.Grid>
      </mui.ThemeProvider>
    );
  }
  return (
    <div className="page-body testing">
      <TestCompare
        title="Action Button"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink:
              "https://mui.com/material-ui/react-floating-action-button/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[5px]">
                  <mui.Fab color="primary" aria-label="add">
                    <AddIcon />
                  </mui.Fab>
                  <mui.Fab color="secondary" aria-label="edit">
                    <EditIcon />
                  </mui.Fab>
                  <mui.Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                  </mui.Fab>
                </div>
              </mui.ThemeProvider>
            ),
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
              <div className="flex gap-[5px]">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            ),
            note: "Has five variants, all with customizable colors. No click animations, but there is still a hover color.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-button/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[20px]">
                  Primary
                  <mui.Button variant="contained">Contained</mui.Button>
                  <mui.Button variant="outlined">Outlined</mui.Button>
                  <mui.Button variant="text">Text</mui.Button>
                </div>
                <div className="flex gap-[5px]">
                  Seconday
                  <mui.Button color="secondary" variant="contained">
                    Contained
                  </mui.Button>
                  <mui.Button color="secondary" variant="outlined">
                    Outlined
                  </mui.Button>
                  <mui.Button color="secondary" variant="text">
                    Text
                  </mui.Button>
                </div>
              </mui.ThemeProvider>
            ),
            note: "Has three variants, with only one color for the entire button. This comes with a risk for accessability. Custom theme colors are also limited. Click animations are very nice.",
          },
        ]}
      />
      <TestCompare
        title="Button Group"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-button-group/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
            note: "Available with MUIX.",
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
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <Label htmlFor="disabled">Disabled</Label>
                </div>
              </div>
            ),
            note: "Lower thickness of checkbox border may make it harder to see. This can be changed, but the thin line is standard.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-checkbox/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-wrap gap-[5px]">
                  <mui.Checkbox {...CheckboxLabel} defaultChecked />
                  <mui.Checkbox {...CheckboxLabel} />
                  <mui.Checkbox {...CheckboxLabel} disabled />
                  <mui.FormGroup>
                    <mui.FormControlLabel
                      control={<mui.Checkbox defaultChecked />}
                      label="Label"
                    />
                    <mui.FormControlLabel
                      required
                      control={<mui.Checkbox />}
                      label="Required"
                    />
                    <mui.FormControlLabel
                      disabled
                      control={<mui.Checkbox />}
                      label="Disabled"
                    />
                  </mui.FormGroup>
                  <div>
                    <mui.FormControlLabel
                      label="Parent"
                      control={
                        <mui.Checkbox
                          checked={checked[0] && checked[1]}
                          indeterminate={checked[0] !== checked[1]}
                          onChange={handleChange1}
                        />
                      }
                    />
                    <mui.Box
                      sx={{ display: "flex", flexDirection: "column", ml: 3 }}
                    >
                      <mui.FormControlLabel
                        label="Child 1"
                        control={
                          <mui.Checkbox
                            checked={checked[0]}
                            onChange={handleChange2}
                          />
                        }
                      />
                      <mui.FormControlLabel
                        label="Child 2"
                        control={
                          <mui.Checkbox
                            checked={checked[1]}
                            onChange={handleChange3}
                          />
                        }
                      />
                    </mui.Box>
                  </div>
                  <mui.Checkbox
                    {...CheckboxLabel}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <mui.Checkbox
                    {...CheckboxLabel}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                  />
                </div>
              </mui.ThemeProvider>
            ),
            note: "Has far more options and better visibility on checkboxes",
          },
        ]}
      />

      <TestCompare
        title="Input One Time Password"
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            note: "This is by far the least visually appealing of the two.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-radio-button/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.FormControl>
                  <mui.FormLabel>Pick 1</mui.FormLabel>
                  <mui.RadioGroup defaultValue="1" name="radio-buttons-group">
                    <mui.FormControlLabel
                      value="1"
                      control={<mui.Radio />}
                      label="1"
                    />
                    <mui.FormControlLabel
                      value="2"
                      control={<mui.Radio />}
                      label="2"
                    />
                    <mui.FormControlLabel
                      value="3"
                      control={<mui.Radio />}
                      label="3"
                    />
                  </mui.RadioGroup>
                </mui.FormControl>
              </mui.ThemeProvider>
            ),
            note: "This one is gorgous.",
          },
        ]}
      />

      <TestCompare
        title="Rating"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-rating/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-col gap-[5px]">
                  <mui.Rating
                    name="controlled"
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                  />
                  <mui.Rating name="read-only" value={rating} readOnly />
                  <mui.Rating name="disabled" value={rating} disabled />
                </div>
              </mui.ThemeProvider>
            ),
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
                  <Select.SelectValue placeholder="Select age" />
                </Select.SelectTrigger>
                <Select.SelectContent>
                  <Select.SelectItem value="10">Ten</Select.SelectItem>
                  <Select.SelectItem value="20">Twenty</Select.SelectItem>
                  <Select.SelectItem value="30">Thirty</Select.SelectItem>
                </Select.SelectContent>
              </Select.Select>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-select/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.FormControl fullWidth>
                  <mui.InputLabel id="demo-simple-select-label">
                    Age
                  </mui.InputLabel>
                  <mui.Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleAgeChange}
                  >
                    <mui.MenuItem value={10}>Ten</mui.MenuItem>
                    <mui.MenuItem value={20}>Twenty</mui.MenuItem>
                    <mui.MenuItem value={30}>Thirty</mui.MenuItem>
                  </mui.Select>
                </mui.FormControl>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Slider"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/slider",
            zone: (
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-[60%]"
              />
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-slider/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Box sx={{ width: 200 }}>
                  <mui.Stack
                    spacing={2}
                    direction="row"
                    sx={{ alignItems: "center" }}
                  >
                    <VolumeDown />
                    <mui.Slider aria-label="Volume" defaultValue={30} />
                    <VolumeUp />
                  </mui.Stack>
                </mui.Box>
              </mui.ThemeProvider>
            ),
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
            note: "No animations or built-in hover state.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-switch/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-col gap-[5px]">
                  <mui.Switch {...switchLabel} defaultChecked />
                  <mui.Switch {...switchLabel} />
                  <mui.Switch {...switchLabel} disabled defaultChecked />
                  <mui.Switch {...switchLabel} disabled />
                </div>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
      <TestCompare
        title="Text Field"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/input",
            zone: (
              <div className="flex flex-col gap-[5px]">
                <Input placeholder="Enter text" />
                <Textarea placeholder="Enter message" />
              </div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-text-field/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-col gap-[5px]">
                  <mui.TextField label="Outlined" variant="outlined" />
                  <mui.TextField label="Filled" variant="filled" />
                  <mui.TextField label="Standard" variant="standard" />
                  <mui.TextField
                    label="Multiline"
                    multiline
                    variant="outlined"
                  />
                </div>
              </mui.ThemeProvider>
            ),
            note: "Interface user cannot resize text box. Multiline prop enables textarea autoresizing, though. ",
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
            note: "Simplistic animations are nice, could use more styling.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-toggle-button/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.ToggleButton
                  value="check"
                  selected={toggleSelected}
                  onChange={() =>
                    setToggleSelected((prevSelected) => !prevSelected)
                  }
                >
                  <CheckIcon />
                </mui.ToggleButton>
              </mui.ThemeProvider>
            ),
            note: "Animations can be very overwhelming, plus the hover state makes it harder to determine state.",
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
                <ToggleGroup.ToggleGroupItem
                  value="bold"
                  aria-label="Toggle bold"
                >
                  <Bold className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
                <ToggleGroup.ToggleGroupItem
                  value="italic"
                  aria-label="Toggle italic"
                >
                  <Italic className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
                <ToggleGroup.ToggleGroupItem
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <Underline className="h-4 w-4" />
                </ToggleGroup.ToggleGroupItem>
              </ToggleGroup.ToggleGroup>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-toggle-button/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.ToggleButtonGroup value={formats} onChange={handleFormat}>
                  <mui.ToggleButton value="bold">
                    <FormatBoldIcon />
                  </mui.ToggleButton>
                  <mui.ToggleButton value="italic">
                    <FormatItalicIcon />
                  </mui.ToggleButton>
                  <mui.ToggleButton value="underlined">
                    <FormatUnderlinedIcon />
                  </mui.ToggleButton>
                  <mui.ToggleButton value="color" disabled>
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                  </mui.ToggleButton>
                </mui.ToggleButtonGroup>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
      <TestCompare
        title="Transfer List"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-transfer-list/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <TransferList />
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
    </div>
  );
}
export function ComparisonFeedback() {
  const currentTheme = useTheme();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackClick = () => {
    setOpenSnackbar(true);
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: mui.SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div className="page-body testing">
      <TestCompare
        title="Alert"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/alert",
            zone: (
              <div className="flex flex-col gap-[5px]">
                <Alert.Alert>
                  <CheckCircle2Icon className="h-4 w-4" />
                  <Alert.AlertTitle>Success</Alert.AlertTitle>
                  <Alert.AlertDescription>
                    Your changes have been saved.
                  </Alert.AlertDescription>
                </Alert.Alert>
                <Alert.Alert variant="destructive">
                  <AlertCircleIcon className="h-4 w-4" />
                  <Alert.AlertTitle>Error</Alert.AlertTitle>
                  <Alert.AlertDescription>
                    Something went wrong.
                  </Alert.AlertDescription>
                </Alert.Alert>
              </div>
            ),
            note: "Uses primary color for success and destructive color for error.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-alert/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex flex-col gap-[5px]">
                  <mui.Alert severity="success">
                    Your changes have been saved.
                  </mui.Alert>
                  <mui.Alert severity="error">Something went wrong.</mui.Alert>
                </div>
              </mui.ThemeProvider>
            ),
            note: "Uses distinct and recognizable success/failure colors",
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
                    <AlertDialog.AlertDialogTitle>
                      Are you sure?
                    </AlertDialog.AlertDialogTitle>
                    <AlertDialog.AlertDialogDescription>
                      This action cannot be undone.
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
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />
      <TestCompare
        title="Backdrop"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-backdrop/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <Button onClick={() => setOpenBackdrop(true)}>
                  Show Backdrop
                </Button>
                <mui.Backdrop
                  sx={{ color: "#fff", zIndex: 9999 }}
                  open={openBackdrop}
                  onClick={() => setOpenBackdrop(false)}
                >
                  <CircularProgress color="inherit" />
                </mui.Backdrop>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />{" "}
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />{" "}
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />{" "}
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />
      <TestCompare
        title="Snackbar"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-snackbar/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Button onClick={() => setOpenSnackbar(true)}>
                  Open Snackbar
                </mui.Button>
                <mui.Snackbar
                  open={openSnackbar}
                  autoHideDuration={6000}
                  onClose={handleSnackClose}
                  message="This is what the snackbar does"
                  action={
                    <React.Fragment>
                      <mui.Button
                        color="secondary"
                        size="small"
                        onClick={handleSnackClose}
                      >
                        UNDO
                      </mui.Button>
                      <mui.IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleSnackClose}
                      >
                        <CloseIcon fontSize="small" />
                      </mui.IconButton>
                    </React.Fragment>
                  }
                />
              </mui.ThemeProvider>
            ),
          },
        ]}
      />
    </div>
  );
}

export function ComparisonNavigation() {
  const currentTheme = useTheme();
  const [value, setValue] = React.useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const menuOpen = Boolean(menuAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchorEl(null);
  };
  const [openDrawer, setOpenDrawer] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  type Anchor = "top" | "left" | "bottom" | "right";
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer({ ...openDrawer, [anchor]: open });
    };
  const drawerList = (anchor: Anchor) => (
    <mui.Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <mui.List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <mui.ListItem key={text} disablePadding>
            <mui.ListItemButton>
              <mui.ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </mui.ListItemIcon>
              <mui.ListItemText primary={text} />
            </mui.ListItemButton>
          </mui.ListItem>
        ))}
      </mui.List>
      <mui.Divider />
      <mui.List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <mui.ListItem key={text} disablePadding>
            <mui.ListItemButton>
              <mui.ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </mui.ListItemIcon>
              <mui.ListItemText primary={text} />
            </mui.ListItemButton>
          </mui.ListItem>
        ))}
      </mui.List>
    </mui.Box>
  );
  const speedDialActions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <mui.Box sx={{ p: 3 }}>{children}</mui.Box>}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="page-body testing">
      <TestCompare
        title="Bottom Navigation"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-bottom-navigation/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Box sx={{ width: 500 }}>
                  <mui.BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <mui.BottomNavigationAction
                      label="Recents"
                      icon={<RestoreIcon />}
                    />
                    <mui.BottomNavigationAction
                      label="Favorites"
                      icon={<FavoriteIcon />}
                    />
                    <mui.BottomNavigationAction
                      label="Nearby"
                      icon={<LocationOnIcon />}
                    />
                  </mui.BottomNavigation>
                </mui.Box>
              </mui.ThemeProvider>
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
                      <Breadcrumb.BreadcrumbPage>Current</Breadcrumb.BreadcrumbPage>
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
                      <Breadcrumb.BreadcrumbPage>Current</Breadcrumb.BreadcrumbPage>
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
                      <Breadcrumb.BreadcrumbPage>Current</Breadcrumb.BreadcrumbPage>
                    </Breadcrumb.BreadcrumbItem>
                  </Breadcrumb.BreadcrumbList>
                </Breadcrumb.Breadcrumb>
              </div>
            ),
            note: "Breadcrumbs by default are staticly defined. For dynamic implementation, see the top of each page. There are two more examples--custom separator and responsive--in the documentation.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-breadcrumbs/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Breadcrumbs aria-label="breadcrumb">
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    MUI
                  </mui.Link>
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    Core
                  </mui.Link>
                  <mui.Typography sx={{ color: "text.primary" }}>
                    Breadcrumbs
                  </mui.Typography>
                </mui.Breadcrumbs>
                <mui.Breadcrumbs separator=">>" aria-label="breadcrumb">
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    MUI
                  </mui.Link>
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    Core
                  </mui.Link>
                  <mui.Typography sx={{ color: "text.primary" }}>
                    Breadcrumbs
                  </mui.Typography>
                </mui.Breadcrumbs>
                <mui.Breadcrumbs maxItems={2} aria-label="breadcrumb">
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    MUI
                  </mui.Link>
                  <mui.Link underline="hover" color="inherit" href={undefined}>
                    Core
                  </mui.Link>
                  <mui.Typography sx={{ color: "text.primary" }}>
                    Breadcrumbs
                  </mui.Typography>
                </mui.Breadcrumbs>
              </mui.ThemeProvider>
            ),
            note: "Supports dynamic and static breadcrumbs with custom separators.",
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
            ),
            note: "I could not get this component to work. The drawer contents never even show up in the DOM.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-drawer/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                {(["left", "right", "top", "bottom"] as const).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <mui.Button onClick={toggleDrawer(anchor, true)}>
                      {anchor}
                    </mui.Button>
                    <mui.Drawer
                      anchor={anchor}
                      open={openDrawer[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {drawerList(anchor)}
                    </mui.Drawer>
                  </React.Fragment>
                ))}
              </mui.ThemeProvider>
            ),
            note: "Fully functional with customizable anchor positions.",
          },
        ]}
      />

      <TestCompare
        title="Link"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-link/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Link href="#">Link</mui.Link>
                <mui.Link href="#" color="inherit">
                  {'color="inherit"'}
                </mui.Link>
                <mui.Link href="#" variant="body2">
                  {'variant="body2"'}
                </mui.Link>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Menu"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/navigation-menu",
            zone: (
              <NavigationMenu.NavigationMenu>
                <NavigationMenu.NavigationMenuList>
                  <NavigationMenu.NavigationMenuItem>
                    <NavigationMenu.NavigationMenuTrigger>
                      Menu
                    </NavigationMenu.NavigationMenuTrigger>
                    <NavigationMenu.NavigationMenuContent>
                      <NavigationMenu.NavigationMenuLink href="/">
                        Home
                      </NavigationMenu.NavigationMenuLink>
                      <NavigationMenu.NavigationMenuLink href="/about">
                        About
                      </NavigationMenu.NavigationMenuLink>
                    </NavigationMenu.NavigationMenuContent>
                  </NavigationMenu.NavigationMenuItem>
                </NavigationMenu.NavigationMenuList>
              </NavigationMenu.NavigationMenu>
            ),
            note: "see radix API documentation for properties that can be passed on to different components.",
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-menu/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Button
                  id="basic-button"
                  aria-controls={menuOpen ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? "true" : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </mui.Button>
                <mui.Menu
                  id="basic-menu"
                  anchorEl={menuAnchorEl}
                  open={menuOpen}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <mui.MenuItem onClick={handleClose}>Profile</mui.MenuItem>
                  <mui.MenuItem onClick={handleClose}>My account</mui.MenuItem>
                  <mui.MenuItem onClick={handleClose}>Logout</mui.MenuItem>
                </mui.Menu>
              </mui.ThemeProvider>
            ),
            note: "Dynamic menu with anchor and close functionality.",
          },
        ]}
      />

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
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-pagination/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Pagination count={10} />
                <mui.Pagination count={10} color="primary" />
                <mui.Pagination count={10} color="secondary" />
                <mui.Pagination count={10} disabled />
                <mui.Pagination variant="outlined" count={10} />
                <mui.Pagination count={10} variant="outlined" color="primary" />
                <mui.Pagination count={10} variant="outlined" color="secondary" />
                <mui.Pagination count={10} variant="outlined" disabled />
              </mui.ThemeProvider>
            ),
            note: "Pagination state is done via API, not via state variable. Add props page and onChange to make it controlled state.",
          },
        ]}
      />

      <TestCompare
        title="Speed Dial"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-speed-dial/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Box
                  sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
                >
                  <mui.SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: "absolute", bottom: 16, right: 16 }}
                    icon={<mui.SpeedDialIcon />}
                  >
                    {speedDialActions.map((action) => (
                      <mui.SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        slotProps={{
                          tooltip: {
                            title: action.name,
                          },
                        }}
                      />
                    ))}
                  </mui.SpeedDial>
                </mui.Box>
              </mui.ThemeProvider>
            ),
            note: "Can opt for a controlled component with open, onOpen, and onClose states. Can also format to open to bottom, left, or right in addition to top.",
          },
        ]}
      />

      <TestCompare
        title="Stepper"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-stepper/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Stepper activeStep={1} alternativeLabel>
                  {steps.map((label) => (
                    <mui.Step key={label}>
                      <mui.StepLabel>{label}</mui.StepLabel>
                    </mui.Step>
                  ))}
                </mui.Stepper>
              </mui.ThemeProvider>
            ),
            note: "Can control steps using activeStep prop for stepper. This would be of good use for a multi-page form, using buttons to navigate between steps. Using the nonLinear prop allows the user to click on steps to navigate to them, even if the click order isn't the linear order.",
          },
        ]}
      />

      <TestCompare
        title="Tabs"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/tabs",
            zone: (
              <Tabs.Tabs defaultValue="t1" className="w-full">
                <Tabs.TabsList>
                  <Tabs.TabsTrigger value="t1">tab 1 trigger</Tabs.TabsTrigger>
                  <Tabs.TabsTrigger value="t2">tab 2 trigger</Tabs.TabsTrigger>
                </Tabs.TabsList>
                <Tabs.TabsContent value="t1">Tab one content</Tabs.TabsContent>
                <Tabs.TabsContent value="t2">Tab two content</Tabs.TabsContent>
              </Tabs.Tabs>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-tabs/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Stack>
                  <mui.Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <mui.Tabs
                      value={tabValue}
                      onChange={handleTabChange}
                      aria-label="basic tabs example"
                    >
                      <mui.Tab label="Item One" {...a11yProps(0)} />
                      <mui.Tab label="Item Two" {...a11yProps(1)} />
                      <mui.Tab label="Item Three" {...a11yProps(2)} />
                    </mui.Tabs>
                  </mui.Box>
                  <CustomTabPanel value={tabValue} index={0}>
                    Item One
                  </CustomTabPanel>
                  <CustomTabPanel value={tabValue} index={1}>
                    Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={tabValue} index={2}>
                    Item Three
                  </CustomTabPanel>
                </mui.Stack>
              </mui.ThemeProvider>
            ),
            note: "style works best if you put it in a mui.Stack component. You have to make a custom component CustomTabPanel with value same as the mui.Tabs value. This CustomTabPanel component is listed in the documentation.",
          },
        ]}
      />
    </div>
  );
}

export function ComparisonSurfaces() {
  const currentTheme = useTheme();
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [menuAnchorElNav, setmenuAnchorElNav] =
    React.useState<HTMLElement | null>(null);
  const [menuAnchorElUser, setmenuAnchorElUser] =
    React.useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setmenuAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setmenuAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setmenuAnchorElUser(null);
  };
  const bull = (
    <mui.Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </mui.Box>
  );

  return (
    <div className="page-body testing">
      <TestCompare
        title="Accordion"
        components={[
          {
            title: "Shad",
            docLink: "https://ui.shadcn.com/docs/components/accordion",
            zone: (
              <Accordion.Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <Accordion.AccordionItem value="item-1">
                  <Accordion.AccordionTrigger>
                    Accordion Trigger 1
                  </Accordion.AccordionTrigger>
                  <Accordion.AccordionContent>
                    Accordion Contents 1
                  </Accordion.AccordionContent>
                </Accordion.AccordionItem>
                <Accordion.AccordionItem value="item-2">
                  <Accordion.AccordionTrigger>
                    Accordion Trigger 2
                  </Accordion.AccordionTrigger>
                  <Accordion.AccordionContent>
                    Accordion Contents 2
                  </Accordion.AccordionContent>
                </Accordion.AccordionItem>
              </Accordion.Accordion>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-accordion/",
            zone: (
              <div className="gap-0">
                <mui.ThemeProvider theme={currentTheme}>
                  <mui.Accordion>
                    <mui.AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <mui.Typography component="span">Accordion 1</mui.Typography>
                    </mui.AccordionSummary>
                    <mui.AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </mui.AccordionDetails>
                  </mui.Accordion>
                  <mui.Accordion>
                    <mui.AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <mui.Typography component="span">Accordion 2</mui.Typography>
                    </mui.AccordionSummary>
                    <mui.AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </mui.AccordionDetails>
                  </mui.Accordion>
                  <mui.Accordion defaultExpanded>
                    <mui.AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <mui.Typography component="span">
                        Accordion Actions
                      </mui.Typography>
                    </mui.AccordionSummary>
                    <mui.AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </mui.AccordionDetails>
                    <mui.AccordionActions>
                      <mui.Button>Cancel</mui.Button>
                      <mui.Button>Agree</mui.Button>
                    </mui.AccordionActions>
                  </mui.Accordion>
                </mui.ThemeProvider>
              </div>
            ),
            note: "All folds are called accordion, so they are technically separate components wrapped in a div. Because of this, container gaps will push contents farther apart. So watch out for that. I also put this inside a theme provider.",
          },
        ]}
      />

      <TestCompare
        title="App Bar"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-app-bar/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.AppBar color="secondary" position="static">
                  <mui.Container maxWidth="xl">
                    <mui.Toolbar disableGutters>
                      <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                      />
                      <mui.Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".3rem",
                          color: "var(--secondary)",
                          textDecoration: "none",
                        }}
                      >
                        LOGO
                      </mui.Typography>

                      <mui.Box
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                      >
                        <mui.IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                        >
                          <MenuIcon />
                        </mui.IconButton>
                        <mui.Menu
                          id="menu-appbar"
                          anchorEl={menuAnchorElNav}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          open={Boolean(menuAnchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{ display: { xs: "block", md: "none" } }}
                        >
                          {pages.map((page) => (
                            <mui.MenuItem key={page} onClick={handleCloseNavMenu}>
                              <mui.Typography
                                sx={{
                                  textAlign: "center",
                                  color: "var(--secondary)",
                                }}
                              >
                                {page}
                              </mui.Typography>
                            </mui.MenuItem>
                          ))}
                        </mui.Menu>
                      </mui.Box>
                      <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                      />
                      <mui.Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                          mr: 2,
                          display: { xs: "flex", md: "none" },
                          flexGrow: 1,
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".3rem",
                          color: "var(--secondary)",
                          textDecoration: "none",
                        }}
                      >
                        LOGO
                      </mui.Typography>
                      <mui.Box
                        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                      >
                        {pages.map((page) => (
                          <mui.Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                              my: 2,
                              color: "var(--secondary)",
                              display: "block",
                            }}
                          >
                            {page}
                          </mui.Button>
                        ))}
                      </mui.Box>
                      <mui.Box sx={{ flexGrow: 0 }}>
                        <mui.Tooltip title="Open settings">
                          <mui.IconButton
                            onClick={handleOpenUserMenu}
                            sx={{ p: 0 }}
                          >
                            <mui.Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/2.jpg"
                            />
                          </mui.IconButton>
                        </mui.Tooltip>
                        <mui.Menu
                          sx={{ mt: "45px" }}
                          id="menu-appbar"
                          anchorEl={menuAnchorElUser}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(menuAnchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          {settings.map((setting) => (
                            <mui.MenuItem
                              key={setting}
                              onClick={handleCloseUserMenu}
                            >
                              <mui.Typography sx={{ textAlign: "center" }}>
                                {setting}
                              </mui.Typography>
                            </mui.MenuItem>
                          ))}
                        </mui.Menu>
                      </mui.Box>
                    </mui.Toolbar>
                  </mui.Container>
                </mui.AppBar>
              </mui.ThemeProvider>
            ),
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
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-card/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <mui.Card sx={{ minWidth: 275 }}>
                  <mui.CardContent>
                    <mui.Typography
                      gutterBottom
                      sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                      Word of the Day
                    </mui.Typography>
                    <mui.Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </mui.Typography>
                    <mui.Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                      adjective
                    </mui.Typography>
                    <mui.Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </mui.Typography>
                  </mui.CardContent>
                  <mui.CardActions>
                    <mui.Button size="small">Learn More</mui.Button>
                  </mui.CardActions>
                </mui.Card>
              </mui.ThemeProvider>
            ),
          },
        ]}
      />

      <TestCompare
        title="Paper"
        components={[
          {
            title: "Shad",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
          {
            title: "MUI",
            docLink: "https://mui.com/material-ui/react-paper/",
            zone: (
              <mui.ThemeProvider theme={currentTheme}>
                <div className="flex gap-[10px] items-center">
                  <mui.Paper sx={{ width: "80px", height: "80px" }} elevation={0} />
                  <mui.Paper sx={{ width: "80px", height: "80px" }} />
                  <mui.Paper sx={{ width: "80px", height: "80px" }} elevation={3} />
                  <mui.Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                    variant="elevation"
                  >
                    default variant
                  </mui.Paper>
                  <mui.Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      textAlign: "center",
                      alignContent: "center",
                    }}
                    variant="outlined"
                  >
                    outlined variant
                  </mui.Paper>
                </div>
              </mui.ThemeProvider>
            ),
            note: "Light mode: elevation changes the box shadow around the box. Dark mode: elevation changes the lightness of the box.",
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
                <HoverCard.HoverCardTrigger>
                  Hover me
                </HoverCard.HoverCardTrigger>
                <HoverCard.HoverCardContent>
                  This content appears on hover.
                </HoverCard.HoverCardContent>
              </HoverCard.HoverCard>
            ),
          },
          {
            title: "MUI",
            docLink: "",
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />
    </div>
  );
}

export function ComparisonPRS() {
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
                    <Pagination.PaginationLink href="#">
                      1
                    </Pagination.PaginationLink>
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
              <Resizable.ResizablePanelGroup
                direction="horizontal"
                className="max-w-md rounded-lg border"
              >
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
                  <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                  </h4>
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />
    </div>
  );
}

export function ComparisonT() {
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
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
            zone: (
              <div className="text-muted-foreground">No direct equivalent</div>
            ),
          },
        ]}
      />
    </div>
  );
}
