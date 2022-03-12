import { createTheme } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black"
  }
});
