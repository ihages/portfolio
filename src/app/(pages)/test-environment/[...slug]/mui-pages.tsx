"use client";
import { Button, Avatar, ThemeProvider, Divider } from "@mui/material";
import { TestBlock } from "@/components/testblock";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering
import theme from "@/utils/mui-theme";
import { blue, red } from "@mui/material/colors";

export function MUI() {
  return (
    <div className="page-body testing">
      <TestBlock
        title="Button"
        docLink="https://mui.com/material-ui/react-button/"
        zone={
          <div className="flex gap-[10px] flex-row flex-wrap alig-center">
            <div className="flex gap-[20px] flex-row">
              <ThemeProvider theme={theme("light")}>
                <div className="flex gap-[10px] flex-col justify-center">
                  Primary                  Secondary
<Button variant="text">Text</Button>
                  <Button variant="contained">Contained</Button>
                  <Button variant="outlined">Outlined</Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Secondary
                  <Button variant="text" color="secondary">
                    Text
                  </Button>
                  <Button variant="contained" color="secondary">
                    Contained
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Outlined
                  </Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Info (Accent)
                  <Button variant="text" color="info">
                    Text
                  </Button>
                  <Button variant="contained" color="info">
                    Contained
                  </Button>
                  <Button variant="outlined" color="info">
                    Outlined
                  </Button>
                </div>
              </ThemeProvider>
            </div>
            <Divider />
            <div className="flex gap-[20px] flex-row">
              <ThemeProvider theme={theme("dark")}>
                <div className="flex gap-[10px] flex-col justify-center">
                  Primary<Button variant="text">Text</Button>
                  <Button variant="contained">Contained</Button>
                  <Button variant="outlined">Outlined</Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Secondary
                  <Button variant="text" color="secondary">
                    Text
                  </Button>
                  <Button variant="contained" color="secondary">
                    Contained
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Outlined
                  </Button>
                </div>
                <div className="flex gap-[10px] flex-col justify-center">
                  Info (Accent)
                  <Button variant="text" color="info">
                    Text
                  </Button>
                  <Button variant="contained" color="info">
                    Contained
                  </Button>
                  <Button variant="outlined" color="info">
                    Outlined
                  </Button>
                </div>
              </ThemeProvider>
            </div>
          </div>
        }
        note="I love the click animation on these buttons. The color, though, does not utilize globals.css. You have to make
         a tsx page and create themes. https://mui.com/material-ui/customization/palette/"
      />
      <TestBlock
        title="Avatar"
        docLink="https://mui.com/material-ui/avatar/"
        zone={
          <ThemeProvider theme={theme()}>
            <div className="flex gap-[10px] flex-col justify-center">
              Image
              <Avatar
                alt="Isabelle Hageman"
                src="https://github.com/ihages.png"
              />
              <Avatar
                alt="Travis Howard"
                src="https://th.bing.com/th/id/R.9b9c8c0b37fe357c94e7c9e68cce18f3?rik=zU6quaZBuG5o%2fg&pid=ImgRaw&r=0"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://makeawebsitehub.com/wp-content/uploads/2014/12/130.jpg"
              />
            </div>
            <div className="flex gap-[10px] flex-col justify-center">
              Initials
              <Avatar>H</Avatar>
              <Avatar sx={{ bgcolor: red }}>N</Avatar>
              <Avatar sx={{ bgcolor: blue }}>OP</Avatar>
            </div>
            <div className="flex gap-[10px] flex-col justify-center">
              Sizes
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </div>
          </ThemeProvider>
        }
        note="If images aren't known, the initials come from the alt image. Alternatively, you can just call them without
         images and define the letters inside the avatar component. You can also put icons inside the avatars by this method."
      />
    </div>
  );
}
