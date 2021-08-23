import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const NewEventModal = ({onEventAdded}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = (eventData) => {
        onEventAdded(eventData)
        reset();
    }
    return (
        <>
        <Button className="mt-3 mb-3" variant="primary" onClick={handleShow}>
          Add Event
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
              <div>
              <label>Event Title:</label>
              <input {...register("title", {required: "Please Enter A Title For The Event"})} className="form-control"></input>
              {errors.title && <p className="ms-1" style={{ color: "crimson" }}>{errors.title.message}</p>}
              </div>
              <div>
                  <label>Event Date:</label>
                  <input {...register("date", {required: "Please Enter A Date For The Event"})} type="date" className="form-control"></input>
                  {errors.date && <p className="ms-1" style={{ color: "crimson" }}>{errors.date.message}</p>}
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