import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { mainTheme } from "./themes/mainTheme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
