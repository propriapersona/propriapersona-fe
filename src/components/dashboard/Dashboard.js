import React, { useState, useEffect } from "react";
import Navigator from "./Navigator.js";
import Content from "./Content.js";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Header from "./Header.js";
import Summary from "../Summary.js";
import Settings from "../Settings.js";
import Forms from "../forms/Forms.js";
import Calendar from "../calendar/Calendar.js";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getAccount } from "../../actions/index.js";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: "#eaeff1",
  },
};

const Dashboard = (props) => {
  const { classes, getAccount } = props;
  const { username } = useParams();
  const history = useHistory();
  const [menuItem, setMenuItem] = useState("settings");

  useEffect(() => {
    getAccount(username);
  }, []);

  console.log(classes);
  console.log(username);
  console.log(props);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            setMenuItem={setMenuItem}
          />
        </nav>
        <div className={classes.app}>
          <Header active={menuItem} />
          <main className={classes.main}>
            {/* <Content /> */}
            {menuItem === "summary" ? (
              <Summary />
            ) : menuItem === "forms" ? (
              <Forms />
            ) : menuItem === "settings" ? (
              <Settings />
            ) : menuItem === "calendar" ? (
              <Calendar />
            ) : (
              "Error"
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.accountReducer.account,
  };
};

export default connect(mapStateToProps, { getAccount })(
  withStyles(styles)(Dashboard)
);

// For reference:
// Dashboard Theme - https://github.com/mui-org/material-ui/blob/master/docs/src/pages/premium-themes/paperbase/Navigator.js
// Live Demo - https://material-ui.com/premium-themes/paperbase/#
