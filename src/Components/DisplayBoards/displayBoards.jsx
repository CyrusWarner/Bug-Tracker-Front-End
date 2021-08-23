import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
const DisplayBoards = ({ userBoards, getCurrentBoard, getUsersBoards }) => {
  return (
    <React.Fragment>
      <Container fluid >
        <Row className="d-flex justify-content-center">
             
              {userBoards.map((board) => {
                return (
                    <Card  className="mt-4" style={{ width: "18rem", margin: "1rem" }}>
                      <Card.Body>
                        <Card.Title>{board.title}</Card.Title>
                        <Card.Text>{board.description}</Card.Text>
                        <Card.Link
                          as={Link}
                          to={`/ShowBoard/${board.boardId}`}
                          onClick={() => getCurrentBoard(board.boardId)}
                        >
                          Card Link
                        </Card.Link>
                      </Card.Body>
                    </Card>
                );
              })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DisplayBoards;
