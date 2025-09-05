"use client";
import * as React from "react";
import * as mui from "@mui/material";
import { TestBlock } from "@/components/testblock";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import { useTheme } from "@/utils/mui-theme";
import { blue, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import CircularProgress from "@mui/material/CircularProgress";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faInfo } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeSvgIcon from "@/components/fa-mui-icon";

export function MUIDataDisplay() {
  const currentTheme = useTheme();
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <div className="page-body testing">
      <TestBlock
        title="Avatar"
        docLink="https://mui.com/material-ui/avatar/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <div className="flex gap-[10px] flex-col justify-center">
              Image
              <mui.Avatar
                alt="Isabelle Hageman"
                src="https://github.com/ihages.png"
              />
              <mui.Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/R.9b9c8c0b37fe357c94e7c9e68cce18f3?rik=zU6quaZBuG5o%2fg&pid=ImgRaw&r=0"
              />
              <mui.Avatar
                alt="Cindy Baker"
                src="https://makeawebsitehub.com/wp-content/uploads/2014/12/130.jpg"
              />
            </div>
            <div className="flex gap-[10px] flex-col justify-center">
              Initials
              <mui.Avatar>H</mui.Avatar>
              <mui.Avatar sx={{ bgcolor: red }}>N</mui.Avatar>
              <mui.Avatar sx={{ bgcolor: blue }}>OP</mui.Avatar>
            </div>
            <div className="flex gap-[10px] flex-col justify-center">
              Sizes
              <mui.Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <mui.Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <mui.Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </div>
          </mui.ThemeProvider>
        }
        note="If images aren't known, the initials come from the alt image. Alternatively, you can just call them without
     images and define the letters inside the avatar component. You can also put icons inside the avatars by this method."
      />
      <TestBlock
        title="Badge"
        docLink="https://mui.com/material-ui/react-badge/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Badge badgeContent={4} color="primary">
              <MailIcon color="action" />
            </mui.Badge>
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="Badge"
        docLink="https://mui.com/material-ui/react-chip/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Chip label="Chip Filled" />
            <mui.Chip label="Chip Outlined" variant="outlined" />
            <mui.Chip label="Deletable" onDelete={handleDelete} />
            <mui.Chip
              label="Deletable"
              variant="outlined"
              onDelete={handleDelete}
            />
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="Divider (Separator)"
        docLink="https://mui.com/material-ui/react-divider/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.List className="w-full" aria-label="mailbox folders">
              <mui.ListItem>
                <mui.ListItemText primary="Inbox" />
              </mui.ListItem>
              <mui.Divider component="li">
                <mui.Chip label="inline chip" size="small"></mui.Chip>
              </mui.Divider>
              <mui.ListItem>
                <mui.ListItemText primary="Drafts" />
              </mui.ListItem>
              <mui.Divider component="li" />
              <mui.ListItem>
                <mui.ListItemText primary="Trash" />
              </mui.ListItem>
              <mui.Divider component="li" />
              <mui.ListItem>
                <mui.ListItemText primary="Spam" />
              </mui.ListItem>
            </mui.List>
            <div className="h-[50px] flex">
              <FormatBoldIcon />
              <mui.Divider orientation="vertical" variant="middle" flexItem />
              <FormatItalicIcon />
            </div>
          </mui.ThemeProvider>
        }
        note="This is the same thing as ShadCN's separator component. Inlcudes horizontal and vertical orientations"
      />
      <TestBlock
        title="Icons"
        docLink="https://mui.com/material-ui/icons/"
        zone={
          <div className="flex gap-[20px] flex-wrap">
            <mui.ThemeProvider theme={currentTheme}>
              <div className="flex flex-col">
                <p>Material UI</p> <FavoriteIcon></FavoriteIcon>
              </div>
              <mui.Divider sx={{ borderColor: "primary.main" }} />
              <div className="flex flex-col justify-center">
                <p>Font Awesome with SVG Component</p>
                <mui.Stack direction="row" spacing={2}>
                  <mui.IconButton aria-label="Example">
                    <FontAwesomeSvgIcon icon={faEllipsisV} />
                  </mui.IconButton>
                  <mui.Button
                    variant="contained"
                    startIcon={<FontAwesomeSvgIcon icon={faInfo} />}
                  >
                    Example
                  </mui.Button>
                </mui.Stack>
              </div>
            </mui.ThemeProvider>
          </div>
        }
        note="Icons are in the library '@mui/icons-material'. The svgicon component lets you use non-mui components inside mui components."
      />
    </div>
  );
}

export function MUIFeedback() {
  const currentTheme = useTheme();
  const [openBackdrop, setOpenBackdrop] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
  };
  return (
    <div className="page-body testing">
      <TestBlock
        title="Alert"
        docLink="https://mui.com/material-ui/react-alert/"
        zone={
          <div>
            <div className="grid grid-cols-2 width-full gap-[10px]">
              <p className="m-px">Theme Provider</p>
              <p className="m-px">Default Theme</p>
              <div className="flex gap-[2px] flex-col">
                <mui.ThemeProvider theme={currentTheme}>
                  <mui.Alert severity="success">
                    This is a success Alert.
                  </mui.Alert>
                  <mui.Alert severity="info">This is an info Alert.</mui.Alert>
                  <mui.Alert severity="warning">
                    This is a warning Alert.
                  </mui.Alert>
                  <mui.Alert severity="error">
                    This is an error Alert.
                  </mui.Alert>
                </mui.ThemeProvider>
              </div>
              <div className="flex gap-[2px] flex-col">
                <mui.Alert severity="success">
                  This is a success Alert.
                </mui.Alert>
                <mui.Alert severity="info">This is an info Alert.</mui.Alert>
                <mui.Alert severity="warning">
                  This is a warning Alert.
                </mui.Alert>
                <mui.Alert severity="error">This is an error Alert.</mui.Alert>
              </div>
            </div>
          </div>
        }
      />
      <TestBlock
        title="Backdrop"
        docLink="https://mui.com/material-ui/react-backdrop/"
        note="This is similar to some of the dialog-related components of shadcn that weren't rendering properly."
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Button onClick={handleOpen}>Show backdrop</mui.Button>
            <mui.Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open={openBackdrop}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </mui.Backdrop>
          </mui.ThemeProvider>
        }
      />
    </div>
  );
}

export function MUIInputs() {
  const currentTheme = useTheme();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [checked, setChecked] = React.useState<boolean[]>([false, false]);
  const [ratingValue, setRatingValue] = React.useState<number | null>(2);

  const [age, setAge] = React.useState("");

  const handleChange = (event: mui.SelectChangeEvent) => {
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

  const [volume, setVolume] = React.useState<number>(30);

  const handleVolume = (event: Event, newValue: number) => {
    setVolume(newValue);
  };

  function not(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => !b.includes(value));
  }

  function intersection(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.includes(value));
  }

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

  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <div className="page-body testing">
      <TestBlock
        title="Button"
        docLink="https://mui.com/material-ui/react-button/"
        zone={
          <div className="flex gap-[10px] flex-row flex-wrap alig-center">
            <div className="flex gap-[20px] flex-row flex-wrap">
              <mui.ThemeProvider theme={useTheme("light")}>
                <div className="flex gap-[10px] flex-col justify-center">
                  Primary
                  <mui.Button variant="text">Text</mui.Button>
                  <mui.Button variant="contained">Contained</mui.Button>
                  <mui.Button variant="outlined">Outlined</mui.Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Secondary
                  <mui.Button variant="text" color="secondary">
                    Text
                  </mui.Button>
                  <mui.Button variant="contained" color="secondary">
                    Contained
                  </mui.Button>
                  <mui.Button variant="outlined" color="secondary">
                    Outlined
                  </mui.Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Info (Accent)
                  <mui.Button variant="text" color="info">
                    Text
                  </mui.Button>
                  <mui.Button variant="contained" color="info">
                    Contained
                  </mui.Button>
                  <mui.Button variant="outlined" color="info">
                    Outlined
                  </mui.Button>
                </div>
              </mui.ThemeProvider>
            </div>
            <mui.Divider />
            <div className="flex gap-[20px] flex-row flex-wrap">
              <mui.ThemeProvider theme={useTheme("dark")}>
                <div className="flex gap-[10px] flex-col justify-center">
                  Primary
                  <mui.Button variant="text">Text</mui.Button>
                  <mui.Button variant="contained">Contained</mui.Button>
                  <mui.Button variant="outlined">Outlined</mui.Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Secondary
                  <mui.Button variant="text" color="secondary">
                    Text
                  </mui.Button>
                  <mui.Button variant="contained" color="secondary">
                    Contained
                  </mui.Button>
                  <mui.Button variant="outlined" color="secondary">
                    Outlined
                  </mui.Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Info (Accent)
                  <mui.Button variant="text" color="info">
                    Text
                  </mui.Button>
                  <mui.Button variant="contained" color="info">
                    Contained
                  </mui.Button>
                  <mui.Button variant="outlined" color="info">
                    Outlined
                  </mui.Button>
                </div>
              </mui.ThemeProvider>
            </div>
          </div>
        }
        note="I love the click animation on these buttons. The color, though, does not utilize globals.css. You have to make a tsx page and create themes. https://mui.com/material-ui/customization/palette/"
      />
      <TestBlock
        title="Button Group"
        docLink="https://mui.com/material-ui/react-button-group/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.ButtonGroup
              variant="contained"
              aria-label="Basic button group"
            >
              <mui.Button>One</mui.Button>
              <mui.Button>Two</mui.Button>
              <mui.Button>Three</mui.Button>
            </mui.ButtonGroup>
            <mui.ButtonGroup variant="outlined" aria-label="Basic button group">
              <mui.Button>One</mui.Button>
              <mui.Button>Two</mui.Button>
              <mui.Button>Three</mui.Button>
            </mui.ButtonGroup>
            <mui.ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="Basic button group"
            >
              <mui.Button>One</mui.Button>
              <mui.Button>Two</mui.Button>
              <mui.Button>Three</mui.Button>
            </mui.ButtonGroup>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Checkbox"
        docLink="https://mui.com/material-ui/react-checkbox/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Checkbox {...label} defaultChecked />
            <mui.Checkbox {...label} />
            <mui.Checkbox {...label} disabled />
            <mui.Checkbox {...label} disabled checked />
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
                color="#ffffff"
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
              <mui.Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
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
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <mui.Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Basic Floating Action Buttons (FAB)"
        docLink="https://mui.com/material-ui/react-floating-action-button/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
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
            <mui.Fab disabled aria-label="like">
              <FavoriteIcon />
            </mui.Fab>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Radio Group"
        docLink="https://mui.com/material-ui/react-radio-button/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.FormControl>
              <mui.FormLabel id="demo-radio-buttons-group-label">
                Gender
              </mui.FormLabel>
              <mui.RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <mui.FormControlLabel
                  value="female"
                  control={<mui.Radio />}
                  label="Female"
                />
                <mui.FormControlLabel
                  value="male"
                  control={<mui.Radio />}
                  label="Male"
                />
                <mui.FormControlLabel
                  value="other"
                  control={<mui.Radio />}
                  label="Other"
                />
              </mui.RadioGroup>
            </mui.FormControl>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Rating"
        docLink="https://mui.com/material-ui/react-rating/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Box sx={{ "& > legend": { mt: 2 } }}>
              <mui.Typography component="legend">Controlled</mui.Typography>
              <mui.Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
              <mui.Typography component="legend">Uncontrolled</mui.Typography>
              <mui.Rating
                name="simple-uncontrolled"
                onChange={(event, newValue) => {
                  console.log(newValue);
                }}
                defaultValue={2}
              />
              <mui.Typography component="legend">Read only</mui.Typography>
              <mui.Rating name="read-only" value={ratingValue} readOnly />
              <mui.Typography component="legend">Disabled</mui.Typography>
              <mui.Rating name="disabled" value={ratingValue} disabled />
              <mui.Typography component="legend">
                No rating given
              </mui.Typography>
              <mui.Rating name="no-value" value={null} />
            </mui.Box>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Select"
        docLink="https://mui.com/material-ui/react-select/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.FormControl fullWidth>
              <mui.InputLabel id="demo-simple-select-label">Age</mui.InputLabel>
              <mui.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <mui.MenuItem value={10}>Ten</mui.MenuItem>
                <mui.MenuItem value={20}>Twenty</mui.MenuItem>
                <mui.MenuItem value={30}>Thirty</mui.MenuItem>
              </mui.Select>
            </mui.FormControl>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Sliders"
        docLink="https://mui.com/material-ui/react-slider/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Box sx={{ width: 200 }}>
              Enabled
              <mui.Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <VolumeDown />
                <mui.Slider
                  aria-label="Volume"
                  value={volume}
                  onChange={handleVolume}
                />
                <VolumeUp />
              </mui.Stack>
              Disabled
              <mui.Slider
                disabled
                defaultValue={30}
                aria-label="Disabled slider"
              />
            </mui.Box>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Switch"
        docLink="https://mui.com/material-ui/react-switch/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Switch {...label} defaultChecked />
            <mui.Switch {...label} />
            <mui.Switch {...label} disabled defaultChecked />
            <mui.Switch {...label} disabled />
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Text Field"
        docLink="https://mui.com/material-ui/react-text-field/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <mui.TextField id="filled-basic" label="Filled" variant="filled" />
            <mui.TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Transfer List"
        docLink="https://mui.com/material-ui/react-transfer-list/"
        zone={<TransferList />}
      />

      <TestBlock
        title="Toggle"
        docLink="https://mui.com/material-ui/react-toggle-button/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
            >
              <mui.ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon />
              </mui.ToggleButton>
              <mui.ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon />
              </mui.ToggleButton>
              <mui.ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon />
              </mui.ToggleButton>
              <mui.ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
              </mui.ToggleButton>
            </mui.ToggleButtonGroup>
          </mui.ThemeProvider>
        }
      />
    </div>
  );
}

export function MUILayout() {
  const currentTheme = useTheme();
  return (
    <div className="page-body testing">
      <TestBlock
        title="Box"
        docLink="https://mui.com/material-ui/react-box/"
        zone={
          <mui.Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            This Box renders as an HTML section element.
          </mui.Box>
        }
      />
    </div>
  );
}

export function MUINavigation() {
  const currentTheme = useTheme();
  const [value, setValue] = React.useState(0);
  return (
    <div className="page-body testing">
      <TestBlock
        title="Bottom Navigation"
        docLink="https://mui.com/material-ui/react-bottom-nagivation/"
        zone={
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
        }
      />
    </div>
  );
}

export function MUISurfaces() {
  const currentTheme = useTheme();
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="page-body testing">
      <TestBlock
        title="Accordion"
        docLink="https://mui.com/material-ui/react-accordion/"
        note="All folds are called accordion, so they are technically separate components wrapped in a div. Because of this, container gaps will push contents farther apart.
    So watch out for that. I also put this inside a theme provider."
        zone={
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
        }
      />
      <TestBlock
        title="App Bar"
        docLink="https://mui.com/material-ui/react-app-bar/"
        zone={
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
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
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
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
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
        }
      />
    </div>
  );
}

export function MUIUtils() {
  const currentTheme = useTheme();
  return <div className="page-body testing"></div>;
}
