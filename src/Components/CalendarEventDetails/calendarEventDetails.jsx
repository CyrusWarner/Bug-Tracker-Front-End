import axios from "axios";
import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'
import { toast } from "react-toastify";
const CalendarEventDetails = ({ show, handleClose, filteredEvents, getAllEvents, userRole }) => {

  const removeEvent = async (eventId) => {
    await axios.delete(`http://localhost:27029/api/Events/${eventId}`).then((res) => {
      if (res.status === 200){
        getAllEvents();
        toast.success("Event Removed Successfully");
      }
    })
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Calendar Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filteredEvents.length !== 0 && (
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Bug Title</th>
                  <th>Bug Assignee</th>
                  <th>Bug Date</th>
                  {userRole === "Admin" &&
                  <th>Actions</th>
                  }
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event) => {
                  return (
                    <React.Fragment>
                      <tr>
                        <td>{event.title}</td>
                        <td>{event.assignee}</td>
                        <td>{event.date}</td>
                        {(userRole === "Admin" || userRole === "Board Owner") &&
                        <td><AiIcons.AiFillDelete onClick={() => [removeEvent(event.eventsId), handleClose()]} style={{cursor: "pointer", color: "red"}} size="1.5rem" /></td>
                        }
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </Table>
          )}
          {filteredEvents.length === 0 && <h3 className="text-center">No Bugs Currently For This Day</h3>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CalendarEventDetails;
