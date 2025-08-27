"use client";
import { Button } from "@mui/material";
import { TestBlock } from "@/components/testblock";
import "./style.css";
import "../style.css"; //ensure styles load with client rendering

export function MUI() {
  return (
    <TestBlock
      title="Button"
      docLink="https://mui.com/material-ui/react-button/"
      zone={
        <>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </>
      }
      note="I love the click animation on these buttons. The color, though, does not utilize globals.css."
    />
  );
}
