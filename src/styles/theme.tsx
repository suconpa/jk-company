import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    common: {
      white: "#fff",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 700,
      lg: 1200,
      xl: 1536,
      mobile: 600,
    },
  },
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: false;
    laptop: false;
    desktop: false;
  }
}

export default theme;
