import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const EmailContactForm = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <input className="form-control"></input>
                        <input className="form-control"></input>
                        <input className="form-control"></input>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default EmailContactForm;