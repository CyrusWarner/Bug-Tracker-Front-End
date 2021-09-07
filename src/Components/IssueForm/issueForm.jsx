import React from "react";
import {  useForm } from "react-hook-form";
import { Container, Row, Form, Button } from "react-bootstrap";
const IssueForm = ({onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <React.Fragment>
      <Container className="g-0">
        <Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-floating">
              <input
              id="bug-title-input"
                style={{ borderColor: "#060b26" }}
                placeholder="Bug Title.."
                className="form-control"
                {...register("title", { required: true })}
              ></input>
              <label for="bug-title-input" className="floatingInput">New Bug Title...</label>
              </div>
              {errors.title && (
                <p className="ms-1" style={{ color: "crimson" }}>
                  Bug Title Is Required
                </p>
              )}
              <textarea
                data-testid="issueForm-1"
                style={{ borderColor: "#060b26" }}
                placeholder="New Bug Description.."
                className="form-control mt-2"
                {...register("description", {
                  required: true})}
              ></textarea>
              {errors.description && (
                <p  className="ms-1" style={{ color: "crimson" }}>
                  Bug Description Is Required
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
