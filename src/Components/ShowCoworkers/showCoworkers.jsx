import React, {useState} from "react";
import {Card, Container, Row } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'

const ShowCoworkers = ({ boardUsers, removeUser }) => {
  const [search, setSearch] = useState("");

  const filterUsers = boardUsers.filter((user) => 
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container>
        <Row>
          <input aria-label="search" type="search" className="form-control" placeholder="Search For Board User By Email.." onChange={(event) => setSearch(event.target.value)}></input>
      {filterUsers.map((user) => {
        return (
          <Card className="cardContainer mt-2 mb-2"> 
            <Card.Body><div className="fs-5">{user.email}</div>
            <span className="position-absolute top-50 end-0 translate-middle-y"><AiIcons.AiOutlineClose  style={{cursor: "pointer "}} onClick={() => (removeUser(user.userId))} color="red" size="2rem" /></span>
            </Card.Body>
          </Card>
        );
      })}
      </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShowCoworkers;
