import React, { useState, useEffect } from "react";
import Navigator from "./Navigator.js";
import Content from "./Content.js";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
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
import TaskList from "../tasks/TaskList.js";
import theme from "../../styles/MuiTheme.js";

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
  const [menuItem, setMenuItem] = useState("summary");

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
            ) : menuItem === "tasks" ? (
              <TaskList />
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
