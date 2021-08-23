import React from 'react';
import {useForm} from "react-hook-form";
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const Login = (props) => {
    const {createCurrentUser} = props;
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const history = useHistory();

    const onSubmit =  async (data) => {
        let user = {
            Email: data.email,
            Password: data.password,
        }
         await axios.post(`http://localhost:27029/api/User/Login`, user).then((res => {
            if(res.status === 200) {
                createCurrentUser(res.data);
                toast.success(`Welcome Back ${res.data.firstName}`)
                history.push("/");
            }
        }))
        .catch((err) => {
            if(err){
                console.log(err)
                toast.error("Invalid Email Or Password")
            }
        })
        reset();
    }

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <div className="text-center">
                        <h1 className="title mb-5">Login</h1>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{borderColor: "#060b26"}} type="text" placeholder="Email" className="form-control" {...register("email", {required: "Please Enter Your Email"})}></input>
                        {errors.email && <p className="ms-1" style={{ color: "crimson" }}>{errors.email.message}</p>}
                        <input style={{borderColor: "#060b26"}} type="password" placeholder="Password" className="form-control mt-2" {...register("password", {required: "Please Enter Your Password"})}></input>
                        {errors.password && <p p className="ms-1" style={{ color: "crimson" }}>{errors.password.message}</p>}
                        <button style={{borderColor: "#060b26", color: "#060b26"}} className="btn btn-outline-primary mt-2" type="submit">Submit</button>
                    </Form>
                </Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
        </React.Fragment>
    )

}

export default Login