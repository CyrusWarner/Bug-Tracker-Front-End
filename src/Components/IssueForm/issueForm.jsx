import React from "react";
import { appendErrors, useForm } from "react-hook-form";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
const IssueForm = ({ currentUser, currentBoard, getAllIssues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { boardId } = currentBoard;
  const { userId } = currentUser;
  const onSubmit = async (issueData) => {
    const data = {
      title: issueData.title,
      description: issueData.description,
      userId: userId,
      boardId: boardId,
    };
    await axios
      .post("http://localhost:27029/api/Issues", data)
      .then((res) => {
        if (res.status === 200) {
          getAllIssues();
          toast.success("Bug Added Successfully");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Error Occured While Adding Bug");
        }
      });
      reset();
  };
  return (
    <React.Fragment>
      <Container className="g-0">
        <Row>
          <Col sm={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ borderColor: "#060b26" }}
                placeholder="Bug Title.."
                className="form-control"
                {...register("title", { required: "Bug Title Is Required" })}
              ></input>
              {errors.title && (
                <p className="ms-1" style={{ color: "crimson" }}>
                  {errors.title.message}
                </p>
              )}
              <textarea
                style={{ borderColor: "#060b26" }}
                placeholder="Bug Description.."
                className="form-control mt-2"
                {...register("description", {
                  required: "Bug Description Is Required",
                  minLength: {
                    value: "25",
                    message: "Board Description Required Atleast 25 Characters",
                  },
                })}
              ></textarea>
              {errors.description && (
                <p className="ms-1" style={{ color: "crimson" }}>
                  {errors.description.message}
                </p>
              )}
              <button
                style={{ borderColor: "#060b26", color: "#060b26" }}
                className="btn btn-outline-primary mt-2"
                type="submit"
              >
                Add Issue
              </button>
            </Form>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default IssueForm;
