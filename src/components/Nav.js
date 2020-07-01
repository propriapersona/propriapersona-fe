import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBar: {
    backgroundColor: "#17404F",
    zIndex: "2",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Propria Persona
          </Typography>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
