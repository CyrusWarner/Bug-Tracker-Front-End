import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
const IssueForm = ({currentUser, currentBoard, getAllIssues}) => {
  const {register, handleSubmit} = useForm();
  const {boardId} = currentBoard;
  const {userId} = currentUser;
  const onSubmit = async (issueData) => {
    const data = {
      title: issueData.title,
      description: issueData.description,
      userId: userId,
      boardId: boardId

    }
    await axios.post("http://localhost:27029/api/Issues", data).then((res) => {
      if (res.status === 200) {
        getAllIssues();
        //TOASTIFY NOTIFICATION HERE
      }
    })
    .catch((err) => {
      if(err){
        console.log(err);
      }
    })
  }
  return (
    <React.Fragment>
      <Container className="g-0">
        <Row>
          <Col sm={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating">
              <input style={{borderColor: "#060b26"}} className="form-control" {...register("title")}></input>
              <label className="floatingInputGrid">Bug Title...</label>
            </div>
            <div className="mt-2 form-floating">
              <input style={{borderColor: "#060b26"}} className="form-control" {...register("description")}></input>
              <label className="floatingInputGrid">Bug Description...</label>
            </div>
            <button style={{borderColor: "#060b26", color: "#060b26"}} className="btn btn-outline-primary mt-2" type="submit">Add Issue</button>
            </Form>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default IssueForm;
