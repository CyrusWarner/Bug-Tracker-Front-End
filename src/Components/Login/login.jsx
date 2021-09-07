import React from 'react';
import {useForm} from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css'
import { Link } from 'react-router-dom';

const Login = ({onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <div className="text-center">
                        <h1 className="title mb-5">Login</h1>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Form  className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating">
                        <input data-testid='login-1' className="form-control"  type="text" placeholder="Email..."  {...register("email", {required: true})}></input>
                        <label className="floatingInputGrid fs-5">Email...</label>
                        </div>
                        {errors.email && <p data-testid='error-text-1' className="errorColor ms-1" >Please enter a valid email</p>}
                        <div className="form-floating">
                        <input data-testid='login-2' className="form-control mt-2" type="password" placeholder="Password..."  {...register("password", {required: true})}></input>
                        <label className="floatingInputGrid fs-5">Password...</label>
                        </div>
                        {errors.password && <p className="errorColor ms-1" >Please enter a valid password</p>}
                        <Button data-testid='login-3'  className="inputButton mt-2" type="submit">Login</Button>
                        <div className="mt-3">Not Registered? <Link to="/SignUp" style={{color: "#45A29E"}}>Register Here</Link></div>
                    </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
        </React.Fragment>
    )

}

export default Login