import React, {useState, useEffect} from 'react';
import ShowCoworkers from '../ShowCoworkers/showCoworkers';
import './inviteCoworker.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
const InviteCoworker = ({users, currentBoard, currentUser}) => {
const [suggestions, setSuggestions] = useState([]);
const [boardUsers, setBoardUsers] = useState([]);
const [text, setText] = useState("");
const [userToAdd, setUserToAdd] = useState([]);
const {boardId} = currentBoard;


useEffect(() => {
    displayBoardUsers();
}, [])
    const handleChange = (event) => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`^${value}`, "i");
             suggestions = users.sort().filter(user => regex.test(user.email));
        }
        setSuggestions(suggestions);
        setText(value)
    }

    const userSelected = (value) => {
        users.filter((user) => {
            if(user.email.toLowerCase() === value.toLowerCase()){
                setUserToAdd(user);
                return;
            }
        })
        setText(value);
        setSuggestions([]);
    }

    const displaySuggestions = () => {
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
            {suggestions.map((user) => {
                return (
                    <li onClick={() => userSelected(user.email)}>{user.email}</li>
                )
            })}
            </ul>
        )
    }

    const displayBoardUsers = async () => {
        await axios.get(`http://localhost:27029/api/User/${boardId}`).then((res) => {
            if(res.status == 200){
                setBoardUsers(res.data)
            }
        })
    }
    const AddNewUser = async () => {
        if(userToAdd.length !== 0){
            let userId = userToAdd.userId;
            await axios.post(`http://localhost:27029/api/User/InvitingUserToBoard/${userId}`, currentBoard).then((res) => {
                if(res.status == 200){
                    displayBoardUsers();
                }
            })
        }
    }

    const removeUser = async (userId) => {
        await axios.delete(`http://localhost:27029/api/User/${userId}/Board/${boardId}`).then((res) => {
            if(res.status === 200){
                toast.success("User Removed Successfully");
                displayBoardUsers();
            }
        })
    }
    return (
        <React.Fragment>
            <Container >
                    <h1 className="mt-3">Board Users</h1>
            </Container>
            <Container>
                <Row>

                    <Col sm={6}>
                        
                        <Button onClick={AddNewUser}>Add User</Button>
                        
                        <div className="autoCompleteText mt-2">
                        <input aria-label="search" placeholder="Email Search..." type="search" value={text} onChange={handleChange}></input>
                        {displaySuggestions()}
                        </div>
                    </Col>
                    <Col sm={6}>
            <ShowCoworkers boardUsers={boardUsers} removeUser={removeUser}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default InviteCoworker;