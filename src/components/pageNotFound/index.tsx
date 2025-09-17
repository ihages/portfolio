import Image from "next/image";
import "./style.css";
import { Paper, ThemeProvider } from "@mui/material";
import { useTheme } from "@/utils/mui-theme";

export default function PageNotFound() {
  return (
    <div className="page-body not-found">
      <div className="flex flex-wrap h-fit">
        <ThemeProvider theme={useTheme()}>
          <Paper className="p-[40px] border-secondary border-[5px]">
            <h1>404 -- Page Not Found</h1>
            <p>Oops! That page doesn't seem to exist!<br/>Try a different one out!</p>
          </Paper>
        </ThemeProvider>
        <Image
          className="not-found-img"
          src="/portfolio/images/404Screen.png"
          alt="could not find this page"
          width={0}
          height={0}
          style={{ width: "40vw", height:"40vw", aspectRatio: "1 / 1" }}
          priority={true}
        />
      </div>
    </div>
  );
}
