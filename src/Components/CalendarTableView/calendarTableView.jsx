import React from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
const CalendarTableView = ({ events }) => {
  return (
    <Container fluid>
      <Row>
          <Col sm={1}></Col>
        <Col sm={10}>
            <div>
          <Table className="text-center" style={{borderColor: "#45A29E"}} responsive striped bordered hover>
            <thead>
              <tr>
                <th>Event Title</th>
                <th>Event Assignee</th>
                <th>Event Date</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => {
                  return(
                <tr>
                  <td>{event.title}</td>
                  <td>{event.assignee}</td>
                  <td>{event.date}</td>
                </tr>
                );
              })}
            </tbody>
          </Table>
          </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
};

export default CalendarTableView;
