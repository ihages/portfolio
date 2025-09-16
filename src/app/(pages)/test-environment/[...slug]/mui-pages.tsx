"use client";
import * as React from "react";
import Image from "next/image";
import * as mui from "@mui/material";
import { TestBlock } from "@/components/testblock";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import { useTheme } from "@/utils/mui-theme";
import { blue, red } from "@mui/material/colors";
import {
  ExpandMore as ExpandMoreIcon,
  Adb as AdbIcon,
  Menu as MenuIcon,
  Mail as MailIcon,
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  LocationOn as LocationOnIcon,
  FavoriteBorder,
  Favorite,
  BookmarkBorder as BookmarkBorderIcon,
  Bookmark as BookmarkIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Navigation as NavigationIcon,
  VolumeDown,
  VolumeUp,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatColorFill as FormatColorFillIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import { faEllipsisV, faInfo } from "@fortawesome/free-solid-svg-icons";

import FontAwesomeSvgIcon from "@/components/fa-mui-icon";

export function MUIDataDisplay() {
  //done
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

      <TestBlock
        title="List"
        docLink="https://mui.com/material-ui/react-list/"
        zone={
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
        }
      />

      <TestBlock
        title="Table"
        docLink="https://mui.com/material-ui/react-table/"
        note="This is actually not a tanstack table. It is very nice looking. Sorting requires programmed logic (is not included in the library) and also requires you to define your header cells. There is also a sticky header prop that makes the header stick while you scroll through the table data. There is also an iption for built-in table pagination and virtualization."
        zone={
          <mui.TableContainer component={mui.Paper}>
            <mui.Table sx={{ minWidth: 650 }} aria-label="simple table">
              <mui.TableHead>
                <mui.TableRow>
                  <mui.TableCell>Dessert (100g serving)</mui.TableCell>
                  <mui.TableCell align="right">Calories</mui.TableCell>
                  <mui.TableCell align="right">Fat&nbsp;(g)</mui.TableCell>
                  <mui.TableCell align="right">Carbs&nbsp;(g)</mui.TableCell>
                  <mui.TableCell align="right">Protein&nbsp;(g)</mui.TableCell>
                </mui.TableRow>
              </mui.TableHead>
              <mui.TableBody>
                {rows.map((row) => (
                  <mui.TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <mui.TableCell component="th" scope="row">
                      {row.name}
                    </mui.TableCell>
                    <mui.TableCell align="right">{row.calories}</mui.TableCell>
                    <mui.TableCell align="right">{row.fat}</mui.TableCell>
                    <mui.TableCell align="right">{row.carbs}</mui.TableCell>
                    <mui.TableCell align="right">{row.protein}</mui.TableCell>
                  </mui.TableRow>
                ))}
              </mui.TableBody>
            </mui.Table>
          </mui.TableContainer>
        }
      />

      <TestBlock
        title="Tooltip"
        docLink="https://mui.com/material-ui/react-tooltip/"
        zone={
          <mui.Tooltip title="Delete">
            <mui.IconButton>
              <DeleteIcon />
            </mui.IconButton>
          </mui.Tooltip>
        }
      />
    </div>
  );
}

export function MUIFeedback() {
  //done
  const currentTheme = useTheme();
  const [openBackdrop, setOpenBackdrop] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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

  const action = (
    <React.Fragment>
      <mui.Button color="secondary" size="small" onClick={handleSnackClose}>
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
  );
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
      <TestBlock
        title="Dialog"
        docLink="https://mui.com/material-ui/react-dialog/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <React.Fragment>
              <mui.Button variant="outlined" onClick={handleDialogOpen}>
                Open alert dialog
              </mui.Button>
              <mui.Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <mui.DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </mui.DialogTitle>
                <mui.DialogContent>
                  <mui.DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </mui.DialogContentText>
                </mui.DialogContent>
                <mui.DialogActions>
                  <mui.Button onClick={handleDialogClose}>Disagree</mui.Button>
                  <mui.Button onClick={handleDialogClose} autoFocus>
                    Agree
                  </mui.Button>
                </mui.DialogActions>
              </mui.Dialog>
            </React.Fragment>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Progress"
        docLink="https://mui.com/material-ui/react-progress/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <div className="w-full flex flex-col gap-[20px]">
              <mui.LinearProgress />
              <mui.LinearProgress variant="determinate" value={50} />
            </div>
            <mui.CircularProgress />
            <mui.CircularProgress variant="determinate" value={50} />
            <React.Fragment>
              <svg width={0} height={0}>
                <defs>
                  <linearGradient
                    id="my_gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e01cd5" />
                    <stop offset="100%" stopColor="#1CB5E0" />
                  </linearGradient>
                </defs>
              </svg>
              <mui.CircularProgress
                sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
              />
            </React.Fragment>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Skeleton"
        docLink="https://mui.com/material-ui/react-skeleton/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Skeleton
              variant="text"
              sx={{ width: "100%", fontSize: "1rem" }}
            />
            <mui.Skeleton variant="circular" width={40} height={40} />
            <mui.Skeleton variant="rectangular" width={210} height={60} />
            <mui.Skeleton variant="rounded" width={210} height={60} />
            <mui.Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          </mui.ThemeProvider>
        }
        note="Pulsing is actually built into the component. Some shapes are given as variants."
      />

      <TestBlock
        title="Snackbar"
        docLink="https://mui.com/material-ui/react-snackbar/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Button onClick={handleSnackClick}>Open Snackbar</mui.Button>
            <mui.Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleSnackClose}
              message="This is what the snackbar does"
              action={action}
            />
          </mui.ThemeProvider>
        }
      />
    </div>
  );
}

export function MUIInputs() {
  //done
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
  const [selectedGallery, setSelectedGallery] = React.useState("default");

  const Item = mui.styled(mui.Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
      cols: 2,
    },
  ];
  const itemData2 = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];

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
      <TestBlock
        title="Container"
        docLink="https://mui.com/material-ui/react-container/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Container
              maxWidth="lg"
              sx={{ p: 2, border: "1px dashed grey" }}
            >
              <p>Lg maxwidth</p>
              <mui.Box
                sx={{ p: 2, border: "1px dashed grey", height: "200px" }}
              >
                <p>set height 200px</p>
              </mui.Box>
            </mui.Container>
            <mui.Container
              fixed
              maxWidth="sm"
              sx={{ p: 2, border: "1px dashed grey" }}
            >
              <p>Sm maxwidth</p>
              <mui.Box
                sx={{ p: 2, border: "1px dashed grey", height: "200px" }}
              >
                <p>set height 200px</p>
              </mui.Box>
            </mui.Container>
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="Grid"
        docLink="https://mui.com/material-ui/react-grid/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Grid
              container
              spacing={2}
              sx={{ p: 2, border: "1px dashed grey" }}
            >
              <mui.Grid size={8} sx={{ p: 2, border: "1px dashed grey" }}>
                <Item>size=8</Item>
              </mui.Grid>
              <mui.Grid size={4} sx={{ p: 2, border: "1px dashed grey" }}>
                <Item>size=4</Item>
              </mui.Grid>
              <mui.Grid size={4} sx={{ p: 2, border: "1px dashed grey" }}>
                <Item>size=4</Item>
              </mui.Grid>
              <mui.Grid size={8} sx={{ p: 2, border: "1px dashed grey" }}>
                <Item>size=8</Item>
              </mui.Grid>
            </mui.Grid>
          </mui.ThemeProvider>
        }
        note="Accomplished by putting grids inside of a larger grid"
      />
      <TestBlock
        title="Stack"
        docLink="https://mui.com/material-ui/react-stack/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Stack spacing={2} sx={{ p: 2, border: "1px dashed grey" }}>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </mui.Stack>
            <mui.Stack
              direction="row"
              divider={<mui.Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{ p: 2, border: "1px dashed grey" }}
            >
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </mui.Stack>
          </mui.ThemeProvider>
        }
        note="Pretty much the same as a flex-col. You can throw in a 'direction' prop to make it a row."
      />{" "}
      <TestBlock
        title="Image List"
        docLink="https://mui.com/material-ui/react-image-list/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Stack spacing={2}>
              <mui.ToggleButtonGroup
                value={selectedGallery}
                exclusive
                onChange={(event, newGallery) => {
                  if (newGallery !== null) {
                    setSelectedGallery(newGallery);
                  }
                }}
                aria-label="gallery selection"
              >
                <mui.ToggleButton value="default" aria-label="default gallery">
                  Default
                </mui.ToggleButton>
                <mui.ToggleButton value="quilted" aria-label="quilted gallery">
                  Quilted
                </mui.ToggleButton>
                <mui.ToggleButton value="woven" aria-label="woven gallery">
                  Woven
                </mui.ToggleButton>
                <mui.ToggleButton value="masonry" aria-label="masonry gallery">
                  Masonry
                </mui.ToggleButton>
                <mui.ToggleButton value="overlay" aria-label="overlay gallery">
                  Desc Overlay
                </mui.ToggleButton>
              </mui.ToggleButtonGroup>

              {selectedGallery === "default" && (
                <mui.ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {itemData.map((item) => (
                    <mui.ImageListItem key={item.img}>
                      <Image
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        width={164}
                        height={164}
                        style={{ objectFit: 'cover' }}
                      />
                    </mui.ImageListItem>
                  ))}
                </mui.ImageList>
              )}

              {selectedGallery === "quilted" && (
                <mui.ImageList
                  sx={{ width: 500, height: 450 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {itemData.map((item) => (
                    <mui.ImageListItem
                      key={item.img}
                      cols={item.cols || 1}
                      rows={item.rows || 1}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={121}
                        height={121}
                        style={{ objectFit: 'cover' }}
                      />
                    </mui.ImageListItem>
                  ))}
                </mui.ImageList>
              )}

              {selectedGallery === "woven" && (
                <mui.ImageList
                  sx={{ width: 500, height: 450 }}
                  variant="woven"
                  cols={3}
                  rowHeight={164}
                >
                  {itemData2.map((item) => (
                    <mui.ImageListItem key={item.img}>
                      <Image
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        alt={item.title}
                        width={161}
                        height={164}
                        style={{ objectFit: 'cover' }}
                      />
                    </mui.ImageListItem>
                  ))}
                </mui.ImageList>
              )}

              {selectedGallery === "masonry" && (
                <mui.ImageList
                  variant="masonry"
                  cols={3}
                  gap={8}
                  sx={{ width: 500, height: 450 }}
                >
                  {itemData2.map((item) => (
                    <mui.ImageListItem key={item.img}>
                      <Image
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        width={248}
                        height={200}
                        style={{ objectFit: 'cover' }}
                      />
                    </mui.ImageListItem>
                  ))}
                </mui.ImageList>
              )}

              {selectedGallery === "overlay" && (
                <mui.ImageList sx={{ width: 500, height: 450 }}>
                  {itemData.map((item) => (
                    <mui.ImageListItem key={item.img}>
                      <Image
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        width={248}
                        height={200}
                        style={{ objectFit: 'cover' }}
                      />
                      <mui.ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </mui.ImageListItem>
                  ))}
                </mui.ImageList>
              )}
            </mui.Stack>
          </mui.ThemeProvider>
        }
        note="Very lovely component with great use of maps. Good applications for gallery (rather than the scroll component from shad)"
      />
    </div>
  );
}

export function MUINavigation() {
  //done
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
      <TestBlock
        title="Breadcrumbs"
        docLink="https://mui.com/material-ui/react-breadcrumbs/"
        zone={
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
        }
      />
      <TestBlock
        title="Drawer"
        docLink="https://mui.com/material-ui/react-drawer/"
        zone={
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
        }
      />
      <TestBlock
        title="Link"
        docLink="https://mui.com/material-ui/react-link/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Link href="#">Link</mui.Link>
            <mui.Link href="#" color="inherit">
              {'color="inherit"'}
            </mui.Link>
            <mui.Link href="#" variant="body2">
              {'variant="body2"'}
            </mui.Link>
          </mui.ThemeProvider>
        }
      />

      <TestBlock
        title="Menu"
        docLink="https://mui.com/material-ui/react-menu/"
        zone={
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
        }
      />

      <TestBlock
        title="Pagination"
        docLink="https://mui.com/material-ui/react-pagination/"
        zone={
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
        }
        note="Pagination state is done via API, not via state variable. Add props page and onChange to make it controlled state."
      />

      <TestBlock
        title="Speed Dial"
        docLink="https://mui.com/material-ui/react-speed-dial/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Box
              sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
            >
              <mui.SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
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
        }
        note="Can opt for a controlled component with open, onOpen, and onClose states. Can also format to oepn to bottom, left, or right in addition to top."
      />

      <TestBlock
        title="Stepper"
        docLink="https://mui.com/material-ui/react-stepper/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <mui.Step key={label}>
                  <mui.StepLabel>{label}</mui.StepLabel>
                </mui.Step>
              ))}
            </mui.Stepper>
          </mui.ThemeProvider>
        }
        note="Can controll steps using activeStep prop for stepper. This would be of good use for a multi-page form, using buttons to navigate between steps. Using the nonLinear prop allows the user to click on steps to navigate to them, even if the click order isn't the linear order."
      />

      <TestBlock
        title="Tabs"
        docLink="https://mui.com/material-ui/react-tabs/"
        zone={
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
        }
        note="style works best if you put it in a mui.Stack component. You have to make a custom component CustomTabPanel with value same as the mui.Tabs value. This CustomTabPanel component is listed in the documentation."
      />
    </div>
  );
}

export function MUISurfaces() {
  //done
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
        }
      />
      <TestBlock
        title="Card"
        docLink="https://mui.com/material-ui/react-card/"
        zone={
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
        }
      />
      <TestBlock
        title="paper"
        docLink="https://mui.com/material-ui/react-paper/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
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
          </mui.ThemeProvider>
        }
        note="Light mode: elevation changes the box shadow around the box. Dark mode:elevation changes the lightness of the box."
      />
    </div>
  );
}

export function MUIUtils() {
  const currentTheme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <React.Fragment>
        <mui.Button onClick={handleOpen}>Open Child Modal</mui.Button>
        <mui.Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <mui.Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <mui.Button onClick={handleClose}>Close Child Modal</mui.Button>
          </mui.Box>
        </mui.Modal>
      </React.Fragment>
    );
  }

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="page-body testing">
      <TestBlock
        title="Modal"
        docLink="https://mui.com/material-ui/react-modal/"
        note="Modal is a lower-level version of dialog that blocks use of the rest of the application. It is used in Dialog, Drawer, Menu, and Popover. This example uses the keepMounted prop so that the contents are always shown in the DOM and searchable by search engines. It also has a child modal inside the modal."
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Stack>
              <mui.Button onClick={() => setModalOpen(true)}>
                Open modal
              </mui.Button>
              <mui.Modal
                keepMounted
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <mui.Box sx={{ ...style, width: 400 }}>
                  <h2 id="parent-modal-title">Text in a modal</h2>
                  <p id="parent-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </p>
                  <ChildModal />
                </mui.Box>
              </mui.Modal>
            </mui.Stack>
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="Popover"
        docLink="https://mui.com/material-ui/react-popover/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Open Popover
            </mui.Button>
            <mui.Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <mui.Typography sx={{ p: 2 }}>
                The content of the Popover.
              </mui.Typography>
            </mui.Popover>
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="TextArea"
        docLink="https://mui.com/material-ui/react-textarea-autosize/"
        zone={
          <mui.ThemeProvider theme={currentTheme}>
            <mui.TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Minimum 3 rows"
              style={{ width: 200, border: "1px dashed grey" }}
            />
            <mui.TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
              style={{ width: 200, border: "1px dashed grey" }}
            />
          </mui.ThemeProvider>
        }
      />
    </div>
  );
}
