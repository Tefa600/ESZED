import React from "react";
import styles from "./Calender.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
function Calender() {
  function renderEventContent(eventInfo) {
    alert(eventInfo.event.start);
    alert(eventInfo.event.end);
    alert("Event: " + eventInfo.event.title);
  }
  const handleDateClick = (arg) => {
    // bind with an arrow function
    arg.jsEvent.preventDefault();
    console.log("arg ", arg);
    console.log("arg date", arg.date);
    console.log("arg all day", arg.allDay);
    console.log("arg date string", arg.date.dateStr);
  };
  return (
    <div>
      <div className={`${styles.layout}`}>
        <div className={`${styles.indexRoute}`}>
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            dateClick={handleDateClick}
            events={[
              { title: "meeting", date: "2023-06-07", start: "5", end: "8" },
              { title: "meeting", date: "2023-06-07" },
              { title: "event 2", date: "2023-06-04" },
              { title: "event 3", date: "2023-06-04" },
              { title: "event 4", date: "2023-06-04" },
            ]}
            eventClick={renderEventContent}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
