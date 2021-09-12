import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col } from "react-bootstrap";
import NewEventModal from "../NewEventModal/newEventModal";
import CalendarTableView from "../CalendarTableView/calendarTableView";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs"
import "./calendar.css";
import axios from "axios";
import { toast } from "react-toastify";
import CalendarEventDetails from "../CalendarEventDetails/calendarEventDetails";
const Calendar = ({ currentBoard, userRole, boardUsers, displayBoardUsers }) => {
  const [show, setShow] = useState(false);
  const [tableView, setTableView] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { boardId } = currentBoard;

  const onEventAdded = async (eventData) => {
    await axios
      .post("http://localhost:27029/api/Events", eventData)
      .then((res) => {
        if (res.status === 200) {
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
        if (res.status === 200) {
          setEvents(res.data);
        }
      })
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

  const calendarEventDrop = (event) => {
    let id = event._def.extendedProps.eventsId;
    let dateObj = new Date(event.start);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();
    let paddedMonth = month.toString();
    if(paddedMonth.length < 2)
    {
      paddedMonth = "0" + paddedMonth;
    }
    let paddedDate = date.toString();
    if(paddedDate.length < 2)
    {
      paddedDate = "0" + paddedDate;
    }
    let dateToStore = `${year}-${paddedMonth}-${paddedDate}`
    events.forEach(event => {
      if(event.eventsId === id)
      {
        event.date = dateToStore;
        axios.patch(`http://localhost:27029/api/Events/`, event).then((res) => {
          if(res.status === 200)
          {
          }
        })
        .catch((err) => {
          if(err)
          {
          }
        })
      }
    })
  }
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1 className="title">Employee Calendar<AiIcons.AiOutlineCalendar color="#45A29E" className="ms-1" size="3rem" /></h1>
            <p className="font-description fs-5">Click On Calendar Day For The Day's Events</p>
            {tableView 
              ? (<div style={{color: "#45A29E"}} className="fs-4">Show Calendar View <AiIcons.AiOutlineCalendar size="2rem" onClick={() => setTableView(!tableView)} style={{cursor: "pointer", color: "#45A29E"}}/></div>)
              : (<div style={{color: "#45A29E"}} className="fs-4">Show Table View <BsIcons.BsTable  onClick={() => setTableView(!tableView)} style={{cursor: "pointer", color: "#45A29E"}}/></div>)
            }
   
            <div>
              {(userRole === "Admin" || userRole === "Board Owner") && (
                <div data-testid="newEventModal">
                <NewEventModal onEventAdded={onEventAdded} boardUsers={boardUsers} currentBoard={currentBoard} displayBoardUsers={displayBoardUsers}/>
                </div>
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
            <div className="m-3 text-center">
            {!tableView &&
                          <FullCalendar
                          plugins={[dayGridPlugin, interactionPlugin]}
                          dateClick={handleDateClick}
                          initialView="dayGridMonth"
                          weekends={false}
                          events={events}
                          editable={true}
                          eventDrop= {(info) => calendarEventDrop(info.event)}
                        ></FullCalendar>
            }
            </div>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
      {tableView &&
            <CalendarTableView events={events}/>
            }
    </React.Fragment>
  );
};

export default Calendar;
