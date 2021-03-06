import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import FolderIcon from "@material-ui/icons/Folder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Link, useParams, useHistory } from "react-router-dom";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

const Navigator = (props) => {
  const { classes, ...other } = props;
  const history = useHistory();
  const { username } = useParams();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          Propria Persona
        </ListItem>
        <ListItem
          className={clsx(classes.item, classes.itemCategory)}
          component={Link}
          onClick={() => {
            other.setMenuItem("summary");
            history.push(`/${username}/dashboard`);
          }}
        >
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.itemPrimary }}>
            Home
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={clsx(classes.item, classes.itemActiveItem)}
          component={Link}
          onClick={() => {
            other.setMenuItem("tasks");
            history.push(`/${username}/tasks`);
          }}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.itemPrimary }}>
            Tasks
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={clsx(classes.item, classes.itemActiveItem)}
          component={Link}
          onClick={() => {
            other.setMenuItem("forms");
            history.push(`/${username}/forms`);
          }}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.itemPrimary }}>
            Forms
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={clsx(classes.item, classes.itemActiveItem)}
          component={Link}
          onClick={() => {
            other.setMenuItem("calendar");
            history.push(`/${username}/events`);
          }}
        >
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.itemPrimary }}>
            Calendar
          </ListItemText>
        </ListItem>
        <ListItem className={classes.categoryHeader}>
          <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
            Case Info
          </ListItemText>
        </ListItem>
        <ListItem
          button
          className={clsx(classes.item, classes.itemActiveItem)}
          component={Link}
          onClick={() => {
            other.setMenuItem("settings");
            history.push(`/${username}/settings`);
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.itemPrimary }}>
            Settings
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Navigator);
