import React, {useState} from "react";
import './displayBoards.css'
import { Link } from "react-router-dom";
import { Container, Row, Card, Button } from "react-bootstrap";
const DisplayBoards = ({ userBoards, getCurrentBoard }) => {
  const [search, setSearch] = useState("")
  const filterBoards = userBoards.filter((boardData) => 
  boardData.board.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <div className="text-center">
        {userBoards.length === 0 
          ?<h1 className="title">You currently have no boards</h1>
          :<h1 className="title">Your Boards</h1>
        }
      </div>
            {
              (userBoards.length !== 0 &&
              <div className="form-floating">
              <input type="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search By Board Name..." className="form-control "></input>
              <label className="floating-input">Search By Board Name...</label>
              </div>
              )}

      <Container className="mb-2" >
        <Row className="d-flex justify-content-center">
        <div className="scrolling-wrapper">
              {filterBoards.map((boardData) => {
                return (
                  <div className="card-item">
                  <React.Fragment>
                  {boardData.inviteAccepted &&
                    <Card  className="cardContainer mt-4" style={{ width: "16rem", margin: "1rem" }}>
                      <Card.Body className="text-center">
                        <Card.Title>{boardData.board.title}</Card.Title>
                        <hr></hr>
                        <Link
                          to={`/ShowBoard/${boardData.board.boardId}`}
                        >
                          <Button className="boardButton mt-2" onClick={() => getCurrentBoard(boardData.boardId)}>View Board</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                    }
                    </React.Fragment>
                    </div>
                );
              })}
              </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DisplayBoards;
