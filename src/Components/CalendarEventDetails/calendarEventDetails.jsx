import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'
import { toast } from "react-toastify";
const CalendarEventDetails = ({ show, handleClose, filteredEvents, getAllEvents }) => {

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filteredEvents.length !== 0 && (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Event Title</th>
                  <th>Event Assignee</th>
                  <th>Event Date</th>
                  <th>Actions</th>
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
                        <td><AiIcons.AiFillDelete onClick={() => [removeEvent(event.eventsId), handleClose()]} style={{cursor: "pointer", color: "red"}} size="1.5rem" /></td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </Table>
          )}
          {filteredEvents.length === 0 && <h3 className="text-center">No Events For The Day</h3>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CalendarEventDetails;
