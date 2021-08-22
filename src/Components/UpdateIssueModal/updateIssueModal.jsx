import React, {useState} from 'react';
import * as BsIcons from 'react-icons/bs'
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const UpdateIssueModal = ({currentIssue, getAllIssues, currentUser}) => {
  const {userId} = currentUser;
    const {title, description, issuesId} = currentIssue;
    const {register, handleSubmit, watch} = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = async (issueData) => {
      const updatedIssue = {
        title: issueData.title,
        description: issueData.description,
        isCompleted: issueData.isCompleted,
        userId: userId
      }
        await axios.put(`http://localhost:27029/api/Issues/${issuesId}`, updatedIssue).then((res) => {
            if (res.status){
                getAllIssues();
                //TOASTIFY NOTIFICATION HERE
            }
        })
        .catch((err) => {
            if(err){
                console.log(err)
            }
        })
    }
    return (
        <>
        <BsIcons.BsPencilSquare onClick={handleShow} style={{cursor: "pointer"}} color="blue" size="2rem"/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Issue</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
                <div className="form-floating mt-2">
                    <input style={{borderColor: "#060b26"}} className="form-control" {...register("title")} defaultValue={title}></input>
                    <label className="floatingInputGrid fs-5">Issue Title...</label>
                </div>
                <div className="form-floating mt-2">
                    <input style={{borderColor: "#060b26"}} className="form-control" {...register("description")} defaultValue={description}></input>
                    <label className="floatingInputGrid fs-5">Issue Description...</label>
                </div>
                <div class="form-check mt-2">
  <input class="form-check-input fs-4 ms-1" type="checkbox"{...register("isCompleted")} value="" id="flexCheckDefault"></input>
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
              Update Issue
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
}
export default UpdateIssueModal;