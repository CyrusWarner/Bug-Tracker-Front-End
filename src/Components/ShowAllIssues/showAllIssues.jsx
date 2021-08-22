import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import UpdateIssueModal from '../UpdateIssueModal/updateIssueModal';
import DeleteIssueModal from '../DeleteIssueModal/deleteIssueModal';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IoIosSquareOutline } from 'react-icons/io';
const ShowAllIssues = ({allIssues, getAllIssues, currentUser}) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        {allIssues.map((issue) => {
                            return(
                                <Card>
                                <Card.Header as="h5">{issue.title}
                                {!issue.isCompleted &&
                                <span style={{margin: "10px", color: "red"}} className="position-absolute top-0 end-0 ">Issue In Progress <FaIcons.FaHourglassHalf style={{color: "red"}}/></span>
                                }
                                {issue.isCompleted &&
                                 <span style={{margin: "10px", color: "green"}} className="position-absolute top-0 end-0 ">Issue Completed <AiIcons.AiFillCheckCircle size="1.5rem" color="green"/></span>
                                }
                                </Card.Header>
                                <Card.Body>
                                  <Card.Text>
                                    {issue.description}
                                  </Card.Text>
                                  <UpdateIssueModal currentIssue={issue} getAllIssues={getAllIssues} currentUser={currentUser}/>
                                  <span className="ms-3"></span>
                                  <DeleteIssueModal currentIssue={issue} getAllIssues={getAllIssues}/>
                                </Card.Body>
                              </Card>
                            )
                        })}
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ShowAllIssues