import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f7fafc",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(
      ","
    ),
  },
});

export default theme;
