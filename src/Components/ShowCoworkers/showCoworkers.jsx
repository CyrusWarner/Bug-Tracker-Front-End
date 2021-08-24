import React from "react";
import {Card } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai'

const ShowCoworkers = ({ boardUsers, removeUser }) => {
  return (
    <React.Fragment>
      {boardUsers.map((user) => {
        return (
          <Card className=" mt-2 mb-2">
            <Card.Body>{user.email}
            <span className="position-absolute top-50 end-0 translate-middle-y"><AiIcons.AiOutlineClose  style={{cursor: "pointer "}} onClick={() => (removeUser(user.userId))} color="red" size="2rem" /></span>
            </Card.Body>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default ShowCoworkers;
