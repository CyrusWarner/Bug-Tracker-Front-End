import React from 'react';
import {useForm} from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = () => {

    const {register, handleSubmit} = useForm()
    const history = useHistory();

    const onSubmit =  async (data) => {
        let user = {
            Email: data.email,
            Password: data.password,
        }
         await axios.post(`http://localhost:27029/api/User/Login`, user).then((res => {
            if(res.status === 200) {
                console.log(res)
                history.push("/")
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
                        <input tyoe="text" className="form-control" {...register("email")}></input>
                        </div>
                        <div>
                        <label>Password</label>
                        <input type="password" className="form-control" {...register("password")}></input>
                        </div>
                        <Button className="mt-2" type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    )

}

export default Login