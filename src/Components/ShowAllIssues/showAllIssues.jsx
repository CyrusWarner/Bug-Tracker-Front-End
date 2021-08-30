import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import UpdateIssueModal from "../UpdateIssueModal/updateIssueModal";
import DeleteIssueModal from "../DeleteIssueModal/deleteIssueModal";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './showAllIssues.css'
const ShowAllIssues = ({ allIssues, getAllIssues, currentUser, userRole }) => {
  const [search, setSearch] = useState("");
  const filterIssues = allIssues.filter((issue) =>
    issue.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
      <Container >
        <Row>
          <input
            type="search"
            className="form-control mt-4"
            placeholder="Search Issues By Title..."
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          {allIssues.length === 0 && (
            <div className="text-center">
              <h1 className="title">No Issues Currently</h1>
            </div>
          )}
          <div className="wrapper">
            {filterIssues.map((issue) => {
              return (
                <div className="item"> 
                <Card className="cardContainer mt-3">
                  {!issue.isCompleted && (
                    <div
                      style={{ margin: "10px", color: "red" }}
                      className="ms-3 fs-4"
                    >
                      Bug In Progress{" "}
                      <FaIcons.FaHourglassHalf size="1.5rem" style={{ color: "red" }} />
                    </div>
                  )}
                  {issue.isCompleted && (
                    <div
                      style={{ margin: "10px", color: "green" }}
                      className="ms-3 fs-4"
                    >
                      Bug Completed{" "}
                      <AiIcons.AiFillCheckCircle size="1.5rem" color="green" />
                    </div>
                  )}
                  <Card.Header style={{backgroundColor: "white"}} className="Roboto-font cardText fs-5">
                    {issue.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{issue.description}</Card.Text>
                    {userRole === "Admin" && (
                      <div className="d-flex justify-content-end">
                        <UpdateIssueModal
                          currentIssue={issue}
                          getAllIssues={getAllIssues}
                          currentUser={currentUser}
                        />
                        <span className="ms-3"></span>
                        <DeleteIssueModal
                          currentIssue={issue}
                          getAllIssues={getAllIssues}
                        />
                      </div>
                    )}
                  </Card.Body>
                </Card>
                </div>
              );
            })}
          </div>
          </Row>
          </Container>
    
  );
};

export default ShowAllIssues;
