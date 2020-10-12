import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import moment from "moment";
import buildCalendar from "./build.js";
import Paper from "@material-ui/core/Paper";

const Calendar = () => {
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

  return (
    <>
      <h1>Calendar will go here.</h1>
      <div>
        {calendar.map((week) => {
          return (
            <div>
              {week.map((day) => {
                return <div>{day.format("D").toString()}</div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Calendar;
