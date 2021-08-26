import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayNoteCards from '../DisplayNoteCards/displayNoteCards';
import * as BsIcons from "react-icons/bs";
import NoteCardForm from '../NoteCardForm/noteCardForm';
import axios from 'axios';
const Notes = ({currentBoard, currentUser}) => {
    const [allNotes, setAllNotes] = useState([]);
    const {title} = currentBoard;

    useEffect(() => {
        getAllNotes();
    }, [])

    const getAllNotes = async () => {
        const boardId = currentBoard.boardId
        await axios.get(`http://localhost:27029/api/Notes/BoardNotes/${boardId}`).then((res) => {
            if(res.status === 200){
                setAllNotes(res.data)
            }
        })
        .catch((err) => {
            if(err){
                console.log(err)
            }
        })
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1 className="title mt-4 mb-5">{title}'s notes<BsIcons.BsPencilSquare className="ms-1" size="3rem" />
                        </h1>
                        <div>
                        <NoteCardForm currentBoard={currentBoard} currentUser={currentUser} getAllNotes={getAllNotes}/>
                        </div>
                        </Col>
                    <Col sm={6}></Col>
                </Row>
            </Container>
            {currentBoard.length !== 0 &&
            <div>
                <DisplayNoteCards allNotes={allNotes} currentBoard={currentBoard} currentUser={currentUser} getAllNotes={getAllNotes}/>
                </div>
            }
        </React.Fragment>
    )
}

export default Notes;