import React, {useState} from 'react';
import EmailContactForm from '../EmailContactForm/emailContactForm';
import { Container, Row, Col } from 'react-bootstrap';
const Email = ({currentUser, boardUsers}) => {
    return (
        <React.Fragment>
           <Container>
               <Row>
                   <Col sm={6}> 
                       <h1 className="title">Email</h1>
                       <EmailContactForm currentUser={currentUser}/>
                   </Col>
                   <Col sm={6}></Col>         
               </Row>
           </Container>
          
        </React.Fragment>
    )
}

export default Email;