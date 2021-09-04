import React, {useEffect} from 'react';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
import InvitedBoards from '../InvitedBoards/invitedBoards';
import { motion } from 'framer-motion';
import {Container, Row, Col} from "react-bootstrap";
const Home = (props) => {

    useEffect(() => {
        setCurrentBoard([])
    },[])

    const {currentUser, userBoards, getUsersBoards, getCurrentBoard, setCurrentBoard, currentBoard} = props;
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <React.Fragment>
            <div>
                <Container  className="mt-5">
                    <Row >
                        <Col  sm={6}>
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards} currentBoard={currentBoard}/>
                        </Col>
                        <Col sm={6}>
                            <div className="d-flex justify-content-center">
                            <InvitedBoards userBoards={userBoards} currentUser={currentUser} getUsersBoards={getUsersBoards}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} />
            </div>
        </React.Fragment>
        </motion.div>
    )
}

export default Home;