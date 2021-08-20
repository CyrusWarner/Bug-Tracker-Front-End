import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const NewEventModal = ({onEventAdded}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {register, handleSubmit} = useForm();

    const onSubmit = (eventData) => {
        console.log(eventData)
        onEventAdded(eventData)
    }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          New Event
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
              <div>
              <label>Event Title:</label>
              <input {...register("title")} className="form-control"></input>
              </div>
              <div>
                  <label>Event Date:</label>
                  <input {...register("date")} type="date" className="form-control"></input>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Add Event
            </Button>
           
          </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
}

export default NewEventModal;