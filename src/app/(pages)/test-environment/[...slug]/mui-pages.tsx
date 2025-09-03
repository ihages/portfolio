"use client";
import * as React from "react";
import * as mui from "@mui/material";
import { TestBlock } from "@/components/testblock";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import theme from "@/utils/mui-theme";
import { blue, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import CircularProgress from "@mui/material/CircularProgress";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export function MUIa() {
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
            <mui.ThemeProvider theme={theme()}>
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
        title="Alert"
        docLink="https://mui.com/material-ui/react-alert/"
        zone={
          <div>
            <div className="grid grid-cols-2 width-full gap-[10px]">
              <p className="m-px">Theme Provider</p>
              <p className="m-px">Default Theme</p>
              <div className="flex gap-[2px] flex-col">
                <mui.ThemeProvider theme={theme()}>
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
        title="App Bar"
        docLink="https://mui.com/material-ui/react-app-bar/"
        zone={
          <mui.ThemeProvider theme={theme()}>
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
      <TestBlock
        title="Avatar"
        docLink="https://mui.com/material-ui/avatar/"
        zone={
          <mui.ThemeProvider theme={theme()}>
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
    </div>
  );
}

export function MUIb() {
  const [openBackdrop, setOpenBackdrop] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
  };
  const [value, setValue] = React.useState(0);
  return (
    <div className="page-body testing">
      <TestBlock
        title="Backdrop"
        docLink="https://mui.com/material-ui/react-backdrop/"
        note="This is similar to some of the dialog-related components of shadcn that weren't rendering properly."
        zone={
          <mui.ThemeProvider theme={theme()}>
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
        title="Badge"
        docLink=""
        zone={
          <mui.ThemeProvider theme={theme()}>
            <mui.Badge badgeContent={4} color="primary">
              <MailIcon />
            </mui.Badge>
          </mui.ThemeProvider>
        }
      />
      <TestBlock
        title="Bottom Navigation"
        docLink="https://mui.com/material-ui/react-bottom-nagivation/"
        zone={
          <mui.ThemeProvider theme={theme()}>
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
        title="Box"
        docLink="https://mui.com/material-ui/react-box/"
        zone={
          <mui.Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
            This Box renders as an HTML section element.
          </mui.Box>
        }
      />
      <TestBlock
        title="Button"
        docLink="https://mui.com/material-ui/react-button/"
        zone={
          <div className="flex gap-[10px] flex-row flex-wrap alig-center">
            <div className="flex gap-[20px] flex-row flex-wrap">
              <mui.ThemeProvider theme={theme("light")}>
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
              <mui.ThemeProvider theme={theme("dark")}>
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
          <mui.ThemeProvider theme={theme()}>
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
    </div>
  );
}
