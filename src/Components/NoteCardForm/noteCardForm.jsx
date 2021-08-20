import axios from 'axios';
import React, {useState} from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const NoteCardForm = ({currentBoard, currentUser, getAllNotes}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {register, handleSubmit} = useForm();
    const onSubmit = async (data) => {
      const notecard = {
        title: data.title,
        description: data.description,
        boardId: currentBoard.boardId,
        userId: currentUser.userId
      }
       await axios.post("http://localhost:27029/api/Notes/New", notecard).then((res) => {
         if(res.status === 200){
            getAllNotes();
         }
       })
       .catch((err) => {
         if(err){
           console.log(err);
           //TOASTIFY NOTIFICATION HERE
         }
       })
    }
    return (
        <Container>
            <Row className="text-center">
                <Col sm={4}></Col>
                <Col sm={4}>
                <Button variant="primary" onClick={handleShow}>
        Add New Note Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make A New Note</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          
          <div>
          <label className="fs-3">Title:</label>
          <input type="text" {...register("title")} className="form-control"></input>
          </div>
          <div>
            <label  className="fs-3">Description:</label>
            <textarea type="text" {...register("description")} className="form-control"></textarea>
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
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}

export default NoteCardForm