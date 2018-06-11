import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import App from "./pages/App";

const styles = {
  "@global": {
    html: {
      height: "100%"
    },
    body: {
      height: "100%"
    },
    "#root": {
      background: "#da9d9d",
      height: "100%",
      overflow: "hidden"
    }
  }
};

const Global = withStyles(styles)(({ children }) => children);

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Global>
      <App />
    </Global>
  </React.Fragment>,
  document.getElementById("root")
);
