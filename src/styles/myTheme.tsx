import { DefaultTheme } from "styled-components";
const color = {
  primary: "#3054A5",
  primaryLight: "#ffd03e",
  primaryDark: "#b28909",
  white: "#fff",
  gray100: "#F5F5F5",
  gray300: "#DBDBDB",
  gray500: "#c4c4c4",
  gray700: "#767676",
  black: "#1F1F1F",
  error: "#D32F2F",
  success: "#2E7D32",
  disabledBackground: "#ffe692",
  disabledText: "#00000035",
};

const fontSize = {
  xxs: "1.2rem",
  xs: "1.4rem",
  sm: "1.6rem",
  md: "1.8rem",
  lg: "2.0rem",
  xl: "2.4rem",
  xxl: "2.8rem",
  xxxl: "3.2rem",
  xxxxl: "4.0rem",
};

const mediaquerySize = {
  mobile: 800,
};

export const styledTheme: DefaultTheme = {
  color,
  fontSize,
  mediaquerySize,
};
