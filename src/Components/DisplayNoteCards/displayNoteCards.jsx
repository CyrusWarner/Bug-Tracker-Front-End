import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import UpdateNotecardForm from '../UpdateNotecardForm/updateNotecardForm';
import DeleteNotecardForm from '../DeleteNotecardForm/deleteNotecardForm';
import './displayNoteCards.css'
const DisplayNoteCards = ({allNotes, currentBoard, currentUser, getAllNotes}) => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="d-flex justify-content-center m-3">
            {allNotes.map((note) => {
                return(
                    <Card className="cardContainer" style={{ width: '24rem' }}>
                    <Card.Body>
                      <Card.Title>{note.title}</Card.Title>
                      <Card.Text>{note.description}</Card.Text>
                      <div className="d-flex justify-content-around">
                      <UpdateNotecardForm note={note} currentBoard={currentBoard} currentUser={currentUser} getAllNotes={getAllNotes}/>
                      <DeleteNotecardForm note={note} getAllNotes={getAllNotes}/>
                      </div>
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