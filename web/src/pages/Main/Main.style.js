import { withStyles } from "@material-ui/core";
import MainComponent from "./Main.container";

const style = (theme) => ({
  App: {
    "text-align": "center",
  },

  "App-logo": {
    height: "40vmin",
    "pointer-events": "none",
  },

  "@media (prefers-reduced-motion: no-preference)": {
    "App-logo": {
      animation: "App-logo-spin infinite 20s linear",
    },
  },

  "App-header": {
    "background-color": "#282c34",
    "min-height": "100vh",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "font-size": "calc(10px + 2vmin)",
    color: "white",
  },

  "App-link": {
    color: "#61dafb",
  },

  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  CVWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  Cv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    height: "50px",
    marginTop: "50px",
    marginLeft: "100px",

  },
});

export default withStyles(style)(MainComponent);
