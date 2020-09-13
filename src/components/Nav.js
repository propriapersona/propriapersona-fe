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
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

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
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    margin: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
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
              <Button color="inherit" className={classes.link}>
                Login
              </Button>
            </Link>
            <Link to="/about">
              <Button color="inherit" className={classes.link}>
                About
              </Button>
            </Link>
            <Link to="/signup">
              <Button color="inherit" className={classes.link}>
                Sign Up
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default Nav;
