import axios from 'axios';
import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai'
const DeleteNotecardForm = ({note, getAllNotes}) => {
    const {title, notesId} = note;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteNotecard = async () => {
        await axios.delete(`http://localhost:27029/api/Notes/${notesId}`).then((res) => {
            if(res.status == 200){
                getAllNotes();
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
        <React.Fragment>
            <AiIcons.AiFillDelete style={{cursor: "pointer", color: "red"}} size="1.5rem"  onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {title}</Modal.Title>
        </Modal.Header>
        <Form >
        <Modal.Body>
            <h3 className="text-center">
            Are you sure you wanna delete this notecard?
            </h3>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="danger" onClick={() => [deleteNotecard(), handleClose()]}>
            Delete Note
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
        </React.Fragment>
    )
}

export default DeleteNotecardForm