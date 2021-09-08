import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import UpdateUserRoleModal from "../UpdateUserRoleModal/updateUserRoleModal";
import * as AiIcons from "react-icons/ai";
import "./showCoworker.css";

const ShowCoworkers = ({ boardUsers, removeUser, currentUser, displayBoardUsers, userRole }) => {
  const [search, setSearch] = useState("");
  const { userId } = currentUser;
  const filterUsers = boardUsers.filter((userData) =>
    userData.user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <React.Fragment>
      <Container>
        <Row>
          <input
            aria-label="search"
            type="search"
            className="form-control mt-2"
            placeholder="Search For Board User By Email..."
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <div className="wrapper">
            {filterUsers.map((userData) => {
              return (
                <div key={userData.userId} className="item">
                  <Card className="cardContainer mt-2 mb-2">
                    {userId !== userData.userId && (
                      <div className="position-absolute top-0 end-0">
                        <AiIcons.AiOutlineClose
                          style={{ cursor: "pointer " }}
                          onClick={() => removeUser(userData.userId)}
                          color="red"
                          size="1.5rem"
                        />
                      </div>
                    )}
                    <Card.Body>
                      <h3 className="coworkerRole">
                        {userData.roles.roleName}
                      </h3>
                      <span className="ms-2">
                        {(userId !== userData.userId) && (userRole === "Board Owner") && (userData.inviteAccepted)  &&
                        <div data-testid="userRole-1">
                      <UpdateUserRoleModal userData={userData} displayBoardUsers={displayBoardUsers}/>
                      </div>
                        }
                      </span>
                      <div className="fs-5 mt-1">{userData.user.email}</div>
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
