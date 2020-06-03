import { withStyles } from "@material-ui/core";
import Sidebar from "./Sidebar.container";

const style = (theme) => ({
  drawer: {
    width: "15%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "15%",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
});

export default withStyles(style)(Sidebar);
