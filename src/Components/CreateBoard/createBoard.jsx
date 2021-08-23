import React, {useState} from "react";
import { Form, Container, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./createBoard.css";
import { toast } from "react-toastify";
//CLEAR USER INPUT WITH USEFORM HOOK DO RESEARCH ON THIS
const CreateBoard = ({ currentUser, getUsersBoards, currentBoard }) => {
  const { register, reset, handleSubmit, formState: {errors} } = useForm();
  const {userId} = currentUser;
  const onSubmit = async (data) => {
    const board = {
      title: data.title,
      description: data.description,
      userId: userId,
    };
    
    await axios
      .post("http://localhost:27029/api/Board", board)
      .then((res) => {
        if (res.status == 200) {
          addRelationshipToUserBoardTable(res.data);
          toast.success("Board Added Successfully")
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Error Creating Board")
        }
      });
      reset();
  };

  const addRelationshipToUserBoardTable = async (newBoard) => {
    console.log(newBoard)
    await axios.post(`http://localhost:27029/api/Board/addUserToBoard/${userId}`, newBoard).then((res) => {
      getUsersBoards();
    })
  }

  return (
    <React.Fragment>
      <Container className="mt-5">
        <Row>
          <div className="text-center">
            <h1 className="title">Add New Board</h1>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ borderColor: "#060b26" }}
              placeholder="Board Title..."
              type="text"
              className="form-control"
              {...register("title", {required: true})}
            ></input>
            {errors.title && <p className="ms-1" style={{color: "crimson"}}>Board Title Is Required</p>}
            <textarea
              style={{ borderColor: "#060b26" }}
              placeholder="Board Description..."
              type="text"
              className="form-control mt-2"
              {...register("description", {required: "Board Description Is Required", minLength: {value: 25, message: "Minimum Description Length Is 25 Characters"}})}
            ></textarea>
            {errors.description && <p className="ms-1" style={{color: "crimson"}}>{errors.description.message}</p>}
            <button
              type="submit"
              style={{ borderColor: "#060b26", color: "#060b26" }}
              className="btn btn-outline-primary mt-2"
            >
              Add Board
            </button>
          </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CreateBoard;
