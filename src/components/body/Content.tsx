import * as React from "react";
import { TAB_VALUES_TYPE } from "../../App";
import { Box } from "@mui/material";

interface ContentProps {
  children: React.ReactNode;
  index: number;
  value: TAB_VALUES_TYPE;
}

export default function Content(props: ContentProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`content-tabpanel-${index}`}
      aria-labelledby={`content-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingRight: {
              xs: "5vw",
              sm: "5vw",
              md: "15vw",
            },
            paddingLeft: {
              xs: "5vw",
              sm: "5vw",
              md: "15vw",
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
