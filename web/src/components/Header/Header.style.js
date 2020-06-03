import { withStyles } from "@material-ui/core";
import Header from "./Header.component";

const style = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

export default withStyles(style)(Header);
