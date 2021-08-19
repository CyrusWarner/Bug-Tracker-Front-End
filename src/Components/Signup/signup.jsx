import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form } from 'react-bootstrap';

const Signup = () => {
    const signupFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const {register} = useForm();
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Form>
                        <label>First Name</label>
                        <input {...register("firstName")} id="firstName"></input>
                        <label>Last Name</label>
                        <input {...register("lastName")} id="lastName"></input>
                        <label >Email</label>
                        <input {...register("email")} id="email"></input>
                        <label>Password</label>
                        <input {...register("password")} id="password"></input>
                        </Form>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Signup;