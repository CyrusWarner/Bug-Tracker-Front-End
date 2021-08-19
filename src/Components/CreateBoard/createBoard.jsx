import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
//CLEAR USER INPUT WITH USEFORM HOOK DO RESEARCH ON THIS
const CreateBoard = ({currentUser, getUsersBoards}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        const board = {
            title: data.title,
            description: data.description,
            userId: currentUser.userId
        }

        await axios.post("http://localhost:27029/api/Board", board).then((res) => {
            if(res.status == 200){
                getUsersBoards();
                //TOASTIFY NOTIFICATION FOR IF SUCCESSFULL
            }
        })
        .catch((err) => {
            if(err){
                console.log(err)
                //TOASTIFY NOTIFICATION GOES HERE
            }
        })
    }
return (
    <React.Fragment>
        <Container className="mt-5">
            <Row>
                <Col sm={8}>
                <h1>This is the create Board</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Board Title:</label>
            <input type="text" className="form-control" {...register("title")}></input>
            </div>
            <div>
            <label>Board Description:</label>
            <textarea type="text" className="form-control" {...register("description")}></textarea>
            </div>
            <Button type="submit" className="mt-2">Add Board</Button>
        </Form>
        </Col>
        <Col sm={4}></Col>
        </Row>
    </Container>
    </React.Fragment>
)
}

export default CreateBoard