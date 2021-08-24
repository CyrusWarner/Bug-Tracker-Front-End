import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ApiKey from '../../ApiKey/apiKey';
import axios from 'axios';

const Signup = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();



    const onSubmit = async (values) => {
        await axios.post("http://localhost:27029/api/User", values).then((res) => {
            if(res.status === 200) {
                var data = {
                    "username": res.data.firstName,
                    "secret": res.data.password,
                    "email": res.data.email
                }
                var config = {
                    method: 'post',
                    url: 'https://api.chatengine.io/users/',
                    headers: {
                        'PRIVATE-KEY': `${ApiKey}`
                    },
                    data : data
                };
                axios(config)
                history.push("/Login")
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
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("firstName", {required: "First Name Is Required"})} id="firstName"></input>
                        <label className="floatingInputGrid fs-5">First Name</label>
                        {errors.firstName && <p className="ms-1" style={{ color: "crimson" }}>{errors.firstName.message}</p>}
                        </div> 

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("lastName", {required: "Last Name Is Required"})} id="lastName"></input>
                        <label className="floatingInputGrid fs-5">Last Name</label>
                        {errors.lastName && <p className="ms-1" style={{ color: "crimson" }}>{errors.lastName.message}</p>}
                        </div>

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} className="form-control" {...register("email", {required: "Email Is Required"})} id="email"></input>
                        <label className="floatingInputGrid fs-5" >Email</label>
                        {errors.email && <p className="ms-1" style={{ color: "crimson" }}>{errors.email.message}</p>}
                        </div>

                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} type="password" className="form-control" {...register("password", {required: "Password Is Required"})} id="password"></input>
                        <label className="floatingInputGrid fs-5">Password</label>
                        {errors.password && <p className="ms-1" style={{ color: "crimson" }}>{errors.password.message}</p>}
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