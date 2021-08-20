import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayNoteCards from '../DisplayNoteCards/displayNoteCards';
import NoteCardForm from '../NoteCardForm/noteCardForm';
const Notes = ({currentBoard, currentUser}) => {
    const {title} = currentBoard;
    console.log(currentUser)
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}><h1 className="mt-4 mb-5">Welcome to {title}'s notes</h1></Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
            <NoteCardForm />
                <DisplayNoteCards />
        </React.Fragment>
    )
}

export default Notes;