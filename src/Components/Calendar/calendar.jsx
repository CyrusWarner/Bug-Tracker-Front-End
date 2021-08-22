import React, {useState, useEffect} from "react";
import FullCalendar, { CalendarApi } from "@fullcalendar/react";
import { Container, Row, Col, Button } from "react-bootstrap";
import dayGridPlugin from "@fullcalendar/daygrid";
import NewEventModal from "../NewEventModal/newEventModal";
import './calendar.css'
import axios from "axios";
const Calendar = ({currentBoard}) => {
    const [events, setEvents] = useState([]);
    const {boardId} = currentBoard;
    const onEventAdded = async (eventData) => {
        const data= {
            title: eventData.title,
            date: eventData.date,
            boardId: boardId
        }
        await axios.post("http://localhost:27029/api/Events", data).then((res) => {
            if(res.status == 200) {
                getAllEvents();
                //ADD TOASTIFY NOTIFICATION HERE
            }
        })
        .catch((err) => {
            if (err){
                console.log(err)
            }
        })
    }

    const getAllEvents = async () => {
        await axios.get(`http://localhost:27029/api/Events/${boardId}`).then((res) => {
            if(res.status == 200){
                setEvents(res.data)
            }
        })
        .catch((err) => {
            if(err){
                console.log(err)
            }
        })
    }
    useEffect(() => {
        getAllEvents();
      }, [])
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1>Employee Calendar</h1>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
      <Container>
          <Row>
              <Col sm={4}></Col>
              <Col sm={4}>
                  <div className="text-center">
              <NewEventModal onEventAdded={onEventAdded}/>
                  </div>
              </Col>
              <Col sm={4}></Col>
              
          </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              events={events}
            ></FullCalendar>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Calendar;
