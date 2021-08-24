import axios from 'axios';
import React, {useState} from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const NoteCardForm = ({currentBoard, currentUser, getAllNotes}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

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
            toast.success("Note Added Successfully")
         }
       })
       .catch((err) => {
         if(err){
           console.log(err);
           toast.error("Error Occured While Adding Note")
         }
       })
       reset();
    }
    
    return (
      <React.Fragment>
                <Button variant="primary" onClick={handleShow}>
        Add New Note Card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          
          <div>
          <label className="fs-3">Title:</label>
          <input type="text" {...register("title", {required: true})} className="form-control"></input>
          {errors.title && <p className="ms-1" style={{ color: "crimson" }}>{errors.title.message}</p>}
          </div>
          <div>
            <label  className="fs-3">Description:</label>
            <textarea type="text" {...register("description", {required: true})} className="form-control"></textarea>
            {errors.description && <p className="ms-1" style={{ color: "crimson" }}>{errors.description.message}</p>}
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

export default NoteCardForm