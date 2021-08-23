import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import * as FiIcons from 'react-icons/fi'
import { toast } from 'react-toastify';
const UpdateNotecardForm = ({note, currentBoard, currentUser, getAllNotes}) => {
    const {boardId} = currentBoard;
    const {userId} = currentUser;
    const {title, description} = note;
    const {register, handleSubmit} = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = async (data) => {
        const noteId = note.notesId;
        const currentNote = {
            title: data.title,
            description: data.description,
            boardId: boardId,
            userId: userId
        }
        await axios.put(`http://localhost:27029/api/Notes/${noteId}`, currentNote).then((res) => {
            if(res.status === 200){
                getAllNotes();
                toast.success("Note Updated Successfully")
            }
        })
        .catch((err) => {
            if(err){
                toast.error("Error Occured While Updating Note")
            }
        })
    }
    return (
        <React.Fragment>
            <FiIcons.FiEdit style={{cursor: "pointer", color: "blue"}} size="1.5rem" onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <div>
          <label  className="fs-3">Title:</label>
          <input defaultValue={title} type="text" {...register("title")} className="form-control"></input>
          </div>
          <div>
            <label  className="fs-3">Description:</label>
            <textarea defaultValue={description} type="text" {...register("description")} className="form-control"></textarea>
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

export default UpdateNotecardForm;