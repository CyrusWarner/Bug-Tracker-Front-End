import React, {useState} from "react";
import './displayBoards.css'
import { Link } from "react-router-dom";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
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
            <div className="form-floating">
          <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search By Board Name..." className="form-control mt-4"></input>
          <label className="floating-input">Search By Board Name...</label>
          </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <Container  fluid>
        <Row className="d-flex justify-content-center">
              {filterBoards.map((board) => {
                return (
                    <Card  className="cardContainer mt-4" style={{ width: "18rem", margin: "1rem" }}>
                      <Card.Body className="text-center">
                        <Card.Title>{board.title}</Card.Title>
                        <hr></hr>
                        {/* <Card.Text>{board.description}</Card.Text> */}
                        <Link
                          to={`/ShowBoard/${board.boardId}`}
                        >
                          <Button className="boardButton" onClick={() => getCurrentBoard(board.boardId)}>View Board</Button>
                        </Link>
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
