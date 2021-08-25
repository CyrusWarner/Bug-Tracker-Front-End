import React, {useState} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import UpdateIssueModal from "../UpdateIssueModal/updateIssueModal";
import DeleteIssueModal from "../DeleteIssueModal/deleteIssueModal";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
const ShowAllIssues = ({ allIssues, getAllIssues, currentUser, userRole }) => {
    const [search, setSearch] = useState("")
    const filterIssues = allIssues.filter((issue) => 
    issue.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <React.Fragment>
      <Container>
        <Row>
            <input type="search" className="form-control mt-4" placeholder="Search Issues By Title..." onChange={(event) => setSearch(event.target.value)}></input>
          {filterIssues.map((issue) => {
            return (
              <Card className="cardContainer mt-3">
                {!issue.isCompleted && (
                  <div
                    style={{ margin: "10px", color: "red" }}
                    className="fs-5 position-absolute top-0 end-0  "
                  >
                    Bug In Progress{" "}
                    <FaIcons.FaHourglassHalf style={{ color: "red" }} />
                  </div>
                )}
                {issue.isCompleted && (
                  <div
                    style={{ margin: "10px", color: "green" }}
                    className="fs-5 position-absolute top-0 end-0 "
                  >
                    Bug Completed{" "}
                    <AiIcons.AiFillCheckCircle size="1.5rem" color="green" />
                  </div>
                )}
                <Card.Header className="cardText mt-4 fs-5">
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
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ShowAllIssues;
