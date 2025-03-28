import * as React from "react";
import { Typography } from "@mui/material";

interface ParagraphProps {
  children: React.ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <Typography
      variant="body1"
      className="text"
      sx={{ lineHeight: "2rem", paddingBottom: "0.5rem" }}
    >
      {children}
    </Typography>
  );
}
