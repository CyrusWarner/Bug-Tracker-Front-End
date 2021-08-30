import React, {useEffect} from 'react';
import * as AiIcons from "react-icons/ai";
import EmailContactForm from '../EmailContactForm/emailContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
const Email = ({currentUser, boardUsers, displayBoardUsers, currentBoard}) => {
    const {boardId} = currentBoard;
    useEffect(() => {
        displayBoardUsers(boardId)
    },[])
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
                       <h1 className="title">Email<AiIcons.AiOutlineMail color="#45A29E" size="3rem" className="ms-1"/></h1>
                   </Col>
                   <Col sm={6}></Col>         
               </Row>
           </Container>
           <EmailContactForm currentUser={currentUser} boardUsers={boardUsers} />
        </React.Fragment>
        </motion.div>
    )
}

export default Email;