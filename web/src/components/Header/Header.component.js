import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

type PropsType = {
  classes: { [name: string]: string },
  onOpenContactInfo: () => void,
  pageTitle: string,
  onToggleSidebar: () => void,
};
class HeaderComponent extends React.Component<PropsType> {
  render() {
    const {
      classes,
      onOpenContactInfo,
      pageTitle,
      onToggleSidebar,
    } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {pageTitle}
          </Typography>
          <Button color="inherit" onClick={onOpenContactInfo}>
            Contact Information
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HeaderComponent;
