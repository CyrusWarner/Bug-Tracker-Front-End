import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Col } from "react-bootstrap";
const DisplayBoards = ({ userBoards, getCurrentBoard, getUsersBoards }) => {
  const [search, setSearch] = useState("")
  const filterBoards = userBoards.filter((board) => 
    board.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
          <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search By Board Name..." className="form-control"></input>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <Container fluid >
        <Row className="d-flex justify-content-center">
              {filterBoards.map((board) => {
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
