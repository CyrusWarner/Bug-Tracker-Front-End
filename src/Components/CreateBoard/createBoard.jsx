import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./createBoard.css"
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
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div className="text-center">
                <h1 className="title">Add New Board</h1>
                    </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating">
            <input style={{borderColor: "#060b26"}} type="text" className="form-control" {...register("title")} defaultValue="Rhenium DevCodeCamp..."></input>
            <label className="floatingInputGrid">Board Title</label>
            </div>
            <div className="mt-2 form-floating">
            <textarea style={{borderColor: "#060b26"}} type="text" className="form-control" {...register("description")} defaultValue="Rhenium Team Chat For Handling Errors..."></textarea>
            <label className="floatingInputGrid">Board Description:</label>
            </div>
            <button type="submit" style={{borderColor: "#060b26", color: "#060b26"}} className="btn btn-outline-primary mt-2">Add Board</button>
        </Form>
        </Col>
        <Col sm={1}></Col>
        </Row>
    </Container>
    </React.Fragment>
)
}

export default CreateBoard