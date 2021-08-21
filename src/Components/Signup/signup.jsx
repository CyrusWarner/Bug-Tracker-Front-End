import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const signupFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = async (values) => {
        await axios.post("http://localhost:27029/api/User", values).then((res) => {
            if(res.status === 200) {
                history.push("/Login")
                //Add Toastify notification here
            }
        })
        .catch((err) => {
            if(err){
                console.log(err)
            }
        })
    }
    return (
        <React.Fragment>
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
                        <Form className="text-center" onSubmit={handleSubmit(onSubmit)}>   
                        <div className="form-floating"> 
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("firstName")} id="firstName"></input>
                        <label className="floatingInputGrid fs-5">First Name</label>
                        </div> 

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("lastName")} id="lastName"></input>
                        <label className="floatingInputGrid fs-5">Last Name</label>
                        </div>

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("email")} id="email"></input>
                        <label className="floatingInputGrid fs-5" >Email</label>
                        </div>

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("password")} id="password"></input>
                        <label className="floatingInputGrid fs-5">Password</label>
                        </div>
                        <div>
                        <button style={{borderColor: "#060b26", color: "#060b26"}} className="btn btn-outline-primary mt-2" type="submit">Complete Signup</button>
                        </div>
                        </Form>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Signup;