import { withStyles } from "@material-ui/core";
import Contact from "./Contact.container";

const style = (theme) => ({
  paper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

export default withStyles(style)(Contact);
