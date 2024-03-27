import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.tsx";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./styles/theme.tsx"; // Material-UI의 테마
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { styledTheme } from "./styles/myTheme.tsx"; // styled-components의 테마

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={styledTheme}>
        <RouterProvider router={router} />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
