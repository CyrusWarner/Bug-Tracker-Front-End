import React from "react";
import { Modal, Button, Table, Container } from "react-bootstrap";
const CalendarEventDetails = ({ show, handleClose, filteredEvents }) => {
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
