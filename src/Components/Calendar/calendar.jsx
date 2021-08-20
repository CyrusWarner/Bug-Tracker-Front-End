import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
const Calendar = () => {
  return (
    <React.Fragment>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
            {title: 'eventTest', date: '2021-08-20'}
        ]}
      ></FullCalendar>
    </React.Fragment>
  );
};

export default Calendar;
