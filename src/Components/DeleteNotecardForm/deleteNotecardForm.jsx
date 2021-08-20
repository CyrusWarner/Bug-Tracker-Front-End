import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai'
const DeleteNotecardForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <AiIcons.AiFillDelete className="ms-2" style={{cursor: "pointer"}} size="1.5rem" variant="primary" onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Form >
        <Modal.Body>
          <div>
          <label className="fs-3">Title:</label>
          <input type="text"  className="form-control"></input>
          </div>
          <div>
            <label  className="fs-3">Description:</label>
            <textarea type="text"  className="form-control"></textarea>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  type="submit" onClick={handleClose}>
            Save Note
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
        </React.Fragment>
    )
}

export default DeleteNotecardForm