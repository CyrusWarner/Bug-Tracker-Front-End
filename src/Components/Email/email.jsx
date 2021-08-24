import React from 'react';
import EmailContactForm from '../EmailContactForm/emailContactForm';
import { Container, Row, Col } from 'react-bootstrap';
const Email = () => {
    return (
        <React.Fragment>
           <Container>
               <Row>
                   <Col sm={4}> </Col>
                   <Col sm={4}>
                       <div className="text-center">
                       <h1 className="title">Email</h1>
                       </div>
                   </Col>
                   <Col sm={4}></Col>              
               </Row>
           </Container>
           <EmailContactForm />
        </React.Fragment>
    )
}

export default Email;