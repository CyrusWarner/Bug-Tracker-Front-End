import axios from 'axios';
import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai'
import { toast } from 'react-toastify';
const DeleteIssueModal = ({currentIssue, getAllIssues}) => {
    const {issuesId} = currentIssue;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteIssue = async () => {
        await axios.delete(`http://localhost:27029/api/Issues/${issuesId}`).then((res) => {
            if(res.status === 200){
                getAllIssues();
                toast.success("Bug Deleted Successfully")
            }
        })
        .catch((err) => {
            if(err){
              toast.success("Error Occured While Deleting Bug")
            }
        })
    }

    return (
        <React.Fragment>
            <AiIcons.AiFillDelete style={{cursor: "pointer", color: "red"}} size="2rem"  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Form >
        <Modal.Body>
            <h3 className="text-center">
            Are you sure you wanna delete this Bug?
            </h3>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="danger" onClick={() => {handleClose(); deleteIssue()}}>
            Delete Bug
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
        </React.Fragment>
    )
}

export default DeleteIssueModal