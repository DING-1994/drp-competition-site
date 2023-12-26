import * as React from "react";
import { Typography } from "@mui/material";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <Typography
      variant="h5"
      sx={{
        paddingTop: "1.5rem",
        paddingBottom: "0.5rem",
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
}
