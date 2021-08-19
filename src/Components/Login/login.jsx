import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
    const LoginFormvalues = {
        email: "",
        password: ""
    }
    const {login, handleSubmit} = useForm()

    onSubmit = async (values) => {
        await axios.get("http://localhost:27029/api/User/Login", values).then((res => {
            if(res.status === 200) {
                console.log(res)
            }
        }))
        .catch((err) => {
            if(err){
                console.log(err)
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <label>Email</label>
                        <input {...login("email")}></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input {...login("password")}></input>
                        </div>
                    </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    )

}

export default Login