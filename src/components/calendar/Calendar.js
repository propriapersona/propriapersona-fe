import React from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const value = dayjs();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");

  return (
    <div>
      <h1>Calendar will go here.</h1>
      <div>
        {startDay.format("MM/DD")} - {endDay.format("MM/DD")}
      </div>
    </div>
  );
};

export default Calendar;
