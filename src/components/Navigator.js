import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core";
// import ListItem from "@material-ui/core";

const useStyles = makeStyles({});

const Navigator = (props) => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>Propria Persona</ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText>Forms</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Case Info</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navigator;
