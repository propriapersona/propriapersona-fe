import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import buildCalendar from "./build.js";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(dayjs());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  // console.log(calendar);
  return (
    <>
      <h1>Calendar will go here.</h1>
      {/* <div>
        {calendar.map((week) => {
          return (
            <div>
              {week.map((day) => {
                return <div>{day.format("D").toString()}</div>;
              })}
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Calendar;
