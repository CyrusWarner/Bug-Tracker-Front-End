import React from 'react';
import {useForm} from "react-hook-form";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = (props) => {
    const {createCurrentUser} = props;
    const {register, handleSubmit} = useForm()
    const history = useHistory();

    const onSubmit =  async (data) => {
        let user = {
            Email: data.email,
            Password: data.password,
        }
         await axios.post(`http://localhost:27029/api/User/Login`, user).then((res => {
            if(res.status === 200) {
                createCurrentUser(res.data);
                history.push("/");
            }
        }))
        .catch((err) => {
            if(err){
                console.log(err)
                //ADD TOASTIFY NOTIFICATION HERE
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
                    <Form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating">
                        <input style={{borderColor: "#060b26"}} type="text" className="form-control" {...register("email")}></input>
                        <label className="floatingInputGrid">Email</label>
                        </div>
                        <div className="form-floating mt-2">
                        <input style={{borderColor: "#060b26"}} type="password" className="form-control" {...register("password")}></input>
                        <label className="floatingInputGrid">Password</label>
                        </div>
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