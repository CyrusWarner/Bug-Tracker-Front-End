import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import UpdateNotecardForm from '../UpdateNotecardForm/updateNotecardForm';
import DeleteNotecardForm from '../DeleteNotecardForm/deleteNotecardForm';
const DisplayNoteCards = ({allNotes, currentBoard, currentUser, getAllNotes}) => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="d-flex justify-content-center">
            {allNotes.map((note) => {
                return(
                    <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text>{note.description}</Card.Text>
                      <UpdateNotecardForm note={note} currentBoard={currentBoard} currentUser={currentUser} getAllNotes={getAllNotes}/>
                      <DeleteNotecardForm note={note} getAllNotes={getAllNotes}/>
                    </Card.Body>
                  </Card>
                )
            })}
            </Row>
    </Container>
</React.Fragment>
    )
}

export default DisplayNoteCards;