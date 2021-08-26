import React from 'react';
import * as AiIcons from "react-icons/ai";
import EmailContactForm from '../EmailContactForm/emailContactForm';
import { Container, Row, Col } from 'react-bootstrap';
const Email = ({currentUser, boardUsers}) => {
    return (
        <React.Fragment>
           <Container>
               <Row>
                   <Col sm={6}> 
                       <h1 className="title">Email<AiIcons.AiOutlineMail size="3rem" className="ms-1"/></h1>
                       <EmailContactForm currentUser={currentUser}/>
                   </Col>
                   <Col sm={6}></Col>         
               </Row>
           </Container>
          
        </React.Fragment>
    )
}

export default Email;