import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col } from "react-bootstrap";
import NewEventModal from "../NewEventModal/newEventModal";
import "./calendar.css";
import axios from "axios";
import { toast } from "react-toastify";
import CalendarEventDetails from "../CalendarEventDetails/calendarEventDetails";
const Calendar = ({ currentBoard, userRole, boardUsers, displayBoardUsers }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { boardId } = currentBoard;

  const onEventAdded = async (eventData) => {
    await axios
      .post("http://localhost:27029/api/Events", eventData)
      .then((res) => {
        if (res.status == 200) {
          getAllEvents();
          toast.success("Event Added Succesffuly");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Error Occured While Adding Event");
        }
      });
  };

  const getAllEvents = async () => {
    await axios
      .get(`http://localhost:27029/api/Events/${boardId}`)
      .then((res) => {
        if (res.status == 200) {
          setEvents(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  const handleDateClick = (dateClick) => {
    const filterEvents = events.filter((event) => {
      if(event.date === dateClick.dateStr){
        return event;
      }
    }
    );
    setFilteredEvents(filterEvents);
    handleShow();
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1 className="title">Employee Calendar</h1>
            <div>
              {userRole === "Admin" && (
                <NewEventModal onEventAdded={onEventAdded} boardUsers={boardUsers} currentBoard={currentBoard} displayBoardUsers={displayBoardUsers}/>
                
              )}
            </div>
          </Col>
          <Col sm={1}>
          <CalendarEventDetails filteredEvents={filteredEvents} show={show} handleClose={handleClose} getAllEvents={getAllEvents} userRole={userRole}/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div className="text-center"></div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <div className="m-3">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              dateClick={handleDateClick}
              initialView="dayGridMonth"
              weekends={false}
              events={events}
            ></FullCalendar>
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Calendar;
