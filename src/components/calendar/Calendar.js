import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import moment from "moment";
import buildCalendar from "./build.js";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Day from "./Day.js";

const styles = (theme) => ({
  week: {
    backgroundColor: "white",
    width: "100%",
    height: "125px",
    lineHeight: "44px",
    textAlign: "center",
    textTransform: "uppercase",
    display: "flex",
    fontWeight: "400",
    borderBottom: "1px solid black",
  },
  container: {
    width: "90%",
    height: "90vh",
    margin: "auto",
  },
  // add: {
  //   flexGrow: 1,
  // },
});

const Calendar = (props) => {
  const { classes } = props;
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <>
      <div className={classes.container}>
        <AppBar component="div" position="static">
          <Toolbar>
            <ChevronLeftIcon onClick={() => setValue(prevMonth())} />
            <Typography>
              {currMonthName()} {currYear()}
            </Typography>
            <ChevronRightIcon onClick={() => setValue(nextMonth())} />
            <AddIcon fontSize="large" />
          </Toolbar>
        </AppBar>
        {calendar.map((week) => {
          return (
            <div className={classes.week}>
              {week.map((day) => {
                return <Day data={day} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default withStyles(styles)(Calendar);
