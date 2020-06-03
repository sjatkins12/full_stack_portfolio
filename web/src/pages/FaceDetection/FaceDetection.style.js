import { withStyles } from "@material-ui/core";
import FaceDetection from "./FaceDetection.container";

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
  Camera: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "25px",
  },
  ProgressBar: {
    width: "40%",
    margin: "25px",
  },
  Backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Explanation: {
    width: "60%",
    marginTop: "50px",
  },
  Text: {
    margin: "10px",
  },
  Button: {
    margin: "10px",
  },
});

export default withStyles(style)(FaceDetection);
