import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import BlurOnIcon from "@material-ui/icons/BlurOn";

type PropsType = {
  open: boolean,
  onCloseSidebar: () => void,
  classes: { [name: string]: string },
};

const Sidebar: React$StatelessFunctionalComponent<PropsType> = ({
  open,
  onCloseSidebar,
  classes,
}) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onCloseSidebar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          { text: "CV", to: "/", icon: <AssignmentIndIcon /> },
          { text: "Face Capture", to: "/face", icon: <BlurOnIcon /> },
        ].map((item, index) => (
          <ListItem component={Link} to={item.to} key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
