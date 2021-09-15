import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayNoteCards from '../DisplayNoteCards/displayNoteCards';
import * as BsIcons from "react-icons/bs";
import NoteCardForm from '../NoteCardForm/noteCardForm';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
const Notes = ({currentBoard, currentUser}) => {
    const [allNotes, setAllNotes] = useState([]);
    const {title, boardId} = currentBoard;
    const {userId} = currentUser;

    useEffect(() => {
        getAllNotes();
    }, [])

    const getAllNotes = async () => {
        const boardId = currentBoard.boardId;
        const userId = currentUser.userId;
        await axios.get(`http://localhost:27029/api/Notes/BoardNotes/board/${boardId}/user/${userId}`).then((res) => {
            if(res.status === 200){
                setAllNotes(res.data)
            }
        })
        .catch((err) => {
            if(err){
                toast.error("Error getting users notes")
            }
        })
    }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1 className="title mt-4 mb-5">{title}'s notes<BsIcons.BsPencilSquare color="#45A29E" className="ms-1" size="3rem" />
                        </h1>
                        <div>
                        <NoteCardForm boardId={boardId} userId={userId} getAllNotes={getAllNotes}/>
                        </div>
                        </Col>
                    <Col sm={6}></Col>
                </Row>
            </Container>
          
            {currentBoard.length !== 0 &&
            <div>
                <DisplayNoteCards allNotes={allNotes} boardId={boardId} userId={userId} getAllNotes={getAllNotes}/>
                </div>
            }
        </React.Fragment>
        </motion.div>
    )
}

export default Notes;