import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const UpdateIssueModal = ({ currentIssue, getAllIssues, userId }) => {
  const { title, description, issuesId, isCompleted } = currentIssue;
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = async (issueData) => {
    const updatedIssue = {
      title: issueData.title,
      description: issueData.description,
      isCompleted: issueData.isCompleted,
      userId: userId,
    };
    await axios
      .put(`http://localhost:27029/api/Issues/${issuesId}`, updatedIssue)
      .then((res) => {
        if (res.status === 200) {
          getAllIssues();
          toast.success("Bug Updated Successfully");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Error Occured While Updating Bug");
        }
      });
  };
  return (
    <>
      <BsIcons.BsPencilSquare
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        color="blue"
        size="2rem"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Bug</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div>
              <label className="fs-3">Bug Title:</label>
              <input
                style={{ borderColor: "#060b26" }}
                className="form-control"
                {...register("title", { required: true })}
                defaultValue={title}
              ></input>
            </div>
            <div>
              <label className="fs-3 mt-2">Bug Description:</label>
              <textarea
                style={{ borderColor: "#060b26" }}
                className="form-control"
                {...register("description", { required: true })}
                defaultValue={description}
              ></textarea>
            </div>
            <div class="form-check mt-2">
              <input
                class="form-check-input fs-4 ms-1"
                defaultChecked={isCompleted}
                type="checkbox"
                {...register("isCompleted")}
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label fs-5 ms-1" for="flexCheckDefault">
                Bug Complete
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Update Bug
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default UpdateIssueModal;
