import React, {useState} from "react";
import './displayBoards.css'
import { Link } from "react-router-dom";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import ReactShowMoreText from "react-show-more-text";
const DisplayBoards = ({ userBoards, getCurrentBoard }) => {
  const [search, setSearch] = useState("")
  const filterBoards = userBoards.filter((boardData) => 
  boardData.board.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            {
              (userBoards.length !== 0)
              ? <div className="form-floating">
              <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search By Board Name..." className="form-control mt-4"></input>
              <label className="floating-input">Search By Board Name...</label>
              </div>
              : <div className="text-center">
              <h1 className="title">You Have No Boards Currently</h1>
              </div>
            }

          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <Container  fluid>
        <Row className="d-flex justify-content-center">
              {filterBoards.map((boardData) => {
                return (
                  <React.Fragment>
                  {boardData.inviteAccepted &&
                    <Card  className="cardContainer mt-4" style={{ width: "18rem", margin: "1rem" }}>
                      <Card.Body className="text-center">
                        <Card.Title>{boardData.board.title}</Card.Title>
                        <hr></hr>
                        <Link
                          to={`/ShowBoard/${boardData.board.boardId}`}
                        >
                          <Button className="boardButton" onClick={() => getCurrentBoard(boardData.boardId)}>View Board</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                    }
                    </React.Fragment>
                );
              })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DisplayBoards;
