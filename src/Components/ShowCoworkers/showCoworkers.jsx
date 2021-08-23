import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
const ShowCoworkers = ({ boardUsers }) => {
  return (
    <React.Fragment>
      {boardUsers.map((user) => {
        return (
          <Card>
            <Card.Body>{user.email}</Card.Body>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default ShowCoworkers;
