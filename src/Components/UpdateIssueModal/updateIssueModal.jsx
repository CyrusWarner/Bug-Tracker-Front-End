import React, {useState} from 'react';
import * as BsIcons from 'react-icons/bs'
import { Modal, Button, Form } from 'react-bootstrap';
const UpdateIssueModal = ({currentIssue}) => {
    const {title, description} = currentIssue;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <BsIcons.BsPencilSquare onClick={handleShow} style={{cursor: "pointer"}} color="blue" size="2rem"/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Issue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <div className="form-floating mt-2">
                    <input style={{borderColor: "#060b26"}} className="form-control" defaultValue={title}></input>
                    <label className="floatingInputGrid fs-5">Issue Title</label>
                </div>
                <div className="form-floating mt-2">
                    <input style={{borderColor: "#060b26"}} className="form-control" defaultValue={description}></input>
                    <label className="floatingInputGrid fs-5">Issue Description</label>
                </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Update Issue
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default UpdateIssueModal;