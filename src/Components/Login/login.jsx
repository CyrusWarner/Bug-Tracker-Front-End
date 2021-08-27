import React from 'react';
import {useForm} from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css'
import axios from 'axios';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const {createCurrentUser} = props;
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const history = useHistory();

    const onSubmit =  async (data) => {
        let user = {
            Email: data.email,
            Password: data.password,
        }
        await axios.post(`http://localhost:27029/api/User/Login`, user).then((res) => {
            if(res.status === 200) {
                createCurrentUser(res.data);
                toast.success(`Welcome Back ${res.data.firstName}`)
                history.push("/");
            }
        })
        .catch((err) => {
            if(err){
                toast.error("Invalid Email Or Password");
            }
        })
        reset();
    }

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
                    <Form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating">
                        <input className="form-control"  type="text" placeholder="Email..."  {...register("email", {required: "Please Enter Your Email"})}></input>
                        <label className="floatingInputGrid fs-5">Email...</label>
                        </div>
                        {errors.email && <p className="errorColor ms-1" >{errors.email.message}</p>}
                        <div className="form-floating">
                        <input className="form-control mt-2" type="password" placeholder="Password..."  {...register("password", {required: "Please Enter Your Password"})}></input>
                        <label className="floatingInputGrid fs-5">Password...</label>
                        </div>
                        {errors.password && <p className="errorColor ms-1" >{errors.password.message}</p>}
                        <Button className="inputButton mt-2" type="submit">Submit</Button>
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