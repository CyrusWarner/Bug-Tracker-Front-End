import React, {useState} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import UpdateNotecardForm from '../UpdateNotecardForm/updateNotecardForm';
import DeleteNotecardForm from '../DeleteNotecardForm/deleteNotecardForm';
import './displayNoteCards.css'
const DisplayNoteCards = ({allNotes, currentBoard, currentUser, getAllNotes}) => {
    const [search, setSearch] = useState("");
    const filterNotes = allNotes.filter((note) => 
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.description.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <React.Fragment>
              {allNotes.length === 0 &&
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <div  className="text-center">
                            <h1 className="title">You Have No Notes Currently</h1>
                        </div>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
            }
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        {allNotes.length !== 0 &&
                        <input data-testid="notecards-search" placeholder="Search For Notecard..." onChange={(e) => setSearch(e.target.value)} className="form-control" type="search"></input>
                         }
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center m-1 mt-2">
            {filterNotes.map((note) => {
                return(
                    <Card className="cardContainer text-center m-2" style={{ width: '24rem' }}>
                    <Card.Body>
                      <Card.Title className="Roboto-font">{note.title}</Card.Title>
                      <hr></hr>
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