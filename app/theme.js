import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#729EA1", // Muted teal/blue-green
      light: "#8FB3B6",
      dark: "#5A7E81",
    },
    secondary: {
      main: "#B5BD89", // Muted green/olive
      light: "#C4CCA0",
      dark: "#9FA872",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9FAFB", // Light grey
    },
    text: {
      primary: "#111827", // Dark grey/black
      secondary: "#6B7280", // Medium grey
    },
    divider: "#E5E7EB", // Light grey border
  },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(
      ","
    ),
  },
});

export default theme;
