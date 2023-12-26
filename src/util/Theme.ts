import { ThemeOptions } from "@mui/material";

export function appTheme(darkMode: boolean) {
  return <ThemeOptions>{
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#427ef5",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    typography: {
      body1: {
        fontSize: "1.02rem",
      },
      body2: {
        fontSize: "0.875rem",
      },
    },
  };
}
