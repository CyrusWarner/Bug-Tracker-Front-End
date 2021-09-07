import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Signup = ({onSignupSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <React.Fragment>
            <div data-testid="signup-component">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <div className="text-center">
                        <h1 className="title mb-5">Signup</h1>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Form className="text-center" onSubmit={handleSubmit(onSignupSubmit)}>   
                        <div className="form-floating"> 
                        <input data-testid="firstName-input"  placeholder="First Name..." style={{borderColor: "#060b26"}} className="form-control" {...register("firstName", {required: true})} id="firstName"></input>
                        <label for="firstName" className="floatingInputGrid fs-5">First Name...</label>
                        {errors.firstName && <p className="errorColor ms-1" >First Name Is Required</p>}
                        </div> 

                        <div className="form-floating mt-2">
                        <input data-testid="lastName-input" placeholder="Last Name..." style={{borderColor: "#060b26"}} className="form-control" {...register("lastName", {required: true})} id="lastName"></input>
                        <label for="lastName" className="floatingInputGrid fs-5">Last Name...</label>
                        {errors.lastName && <p className="errorColor ms-1" >Last Name Is Required</p>}
                        </div>

                        <div className="form-floating mt-2">
                        <input data-testid="email-input" placeholder="Email..." style={{borderColor: "#060b26"}} className="form-control" {...register("email", {required: true})} id="email"></input>
                        <label for="email" className="floatingInputGrid fs-5" >Email...</label>
                        {errors.email && <p className="errorColor ms-1" >Email Is Required</p>}
                        </div>

                        <div className="form-floating mt-2">
                        <input data-testid="password-input" placeholder="Password..." style={{borderColor: "#060b26"}} type="password" className="form-control" {...register("password", {required: true})} id="password"></input>
                        <label for="password" className="floatingInputGrid fs-5">Password...</label>
                        {errors.password && <p className="errorColor ms-1" >Password Is Required</p>}
                        </div>
                        <div>
                        <Button data-testid="signup-button" className="mt-2" type="submit">Complete Signup</Button>
                        <div className="mt-3">Already Registered? <Link to="/Login" style={{color: "#45A29E"}}>Login Here</Link></div>
                        </div>
                        </Form>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default Signup;