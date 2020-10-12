import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import moment from "moment";
import buildCalendar from "./build.js";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Day from "./Day.js";

const styles = (theme) => ({
  week: {
    backgroundColor: "white",
    width: "90%",
    height: "125px",
    lineHeight: "44px",
    textAlign: "center",
    textTransform: "uppercase",
    display: "flex",
    fontWeight: "400",
  },
  container: {
    width: "90%",
    height: "90vh",
    margin: "auto",
  },
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

  return (
    <>
      <div className={classes.container}>
        <div>
          <div>
            {currMonthName()} {currYear()}
          </div>
        </div>
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
