import React, {useState} from "react";
import {Card, Container, Row } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'

const ShowCoworkers = ({ boardUsers, removeUser, currentUser }) => {
  const [search, setSearch] = useState("");
  const {userId} = currentUser;
  const filterUsers = boardUsers.filter((userData) => 
  userData.user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container>
        <Row>
          <input aria-label="search" type="search" className="form-control mt-2" placeholder="Search For Board User By Email..." onChange={(event) => setSearch(event.target.value)}></input>
          <div className="wrapper">
      {filterUsers.map((userData) => {
        return (
          <div className="item">
          <Card className="cardContainer mt-2 mb-2"> 
          {userId !== userData.userId &&
            <div className="position-absolute top-50 end-0 translate-middle-y"><AiIcons.AiOutlineClose  style={{cursor: "pointer "}} onClick={() => (removeUser(userData.userId))} color="red" size="1.5rem" /></div>
            }
            <Card.Body><div className="fs-5 ">{userData.user.email}</div>
            </Card.Body>
          </Card>
          </div>
        );
      })}
      </div>
      </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShowCoworkers;
