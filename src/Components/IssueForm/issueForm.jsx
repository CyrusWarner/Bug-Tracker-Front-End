import React from "react";
import {  useForm } from "react-hook-form";
import { Container, Row, Form, Button } from "react-bootstrap";
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating">
              <input
                style={{ borderColor: "#060b26" }}
                placeholder="Bug Title.."
                className="form-control"
                {...register("title", { required: "Bug Title Is Required" })}
              ></input>
              <label className="floatingInput">New Bug Title..</label>
              </div>
              {errors.title && (
                <p className="ms-1" style={{ color: "crimson" }}>
                  {errors.title.message}
                </p>
              )}
              <textarea
                style={{ borderColor: "#060b26" }}
                placeholder="New Bug Description.."
                className="form-control mt-2"
                {...register("description", {
                  required: "Bug Description Is Required"})}
              ></textarea>
              {errors.description && (
                <p className="ms-1" style={{ color: "crimson" }}>
                  {errors.description.message}
                </p>
              )}
              <Button
                className="mt-2"
                type="submit"
              >
                Add Bug
              </Button>
            </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default IssueForm;
