import React, {useState} from "react";
import { Container, Row, Table, Col } from "react-bootstrap";
const CalendarTableView = ({ events }) => {
  const [search, setSearch] = useState("");
  const filteredEvents = events.filter((boardEvent) =>
  boardEvent.title.toLowerCase().includes(search.toLowerCase()) ||
  boardEvent.assignee.toLowerCase().includes(search.toLowerCase()) ||
  boardEvent.date.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <React.Fragment>
      <Container className="g-0">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div className="m-1">
          <input onChange={(event) => setSearch(event.target.value)} placeholder="Search..." className="form-control mb-2"></input>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    <Container fluid className="g-0">
      <Row>
          <Col sm={1}></Col>
        <Col sm={10}>
            <div className="m-1">
          <Table className="text-center" style={{borderColor: "#45A29E"}} responsive striped bordered hover>
            <thead>
              <tr>
                <th className="col-sm-4">Event Title</th>
                <th className="col-sm-4">Event Assignee</th>
                <th className="col-sm-4">Event Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => {
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
    </React.Fragment>
  );
};

export default CalendarTableView;
