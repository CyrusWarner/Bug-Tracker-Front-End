import React, {useState} from 'react';
import ShowCoworkers from '../ShowCoworkers/showCoworkers';
import './inviteCoworker.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
const InviteCoworker = ({users, currentBoard}) => {
const [suggestions, setSuggestions] = useState([]);
const [text, setText] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length> 0){
            const regex = new RegExp(`^${value}`, "i");
             suggestions = users.sort().filter(user => regex.test(user.email));
        }
        setSuggestions(suggestions);
        setText(value)
    }

    const userSelected = (value) => {
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
    return (
        <React.Fragment>
            <ShowCoworkers />
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <div className="d-flex justify-content-center">
                        <Button>Add User</Button>
                        </div>
                        <div className="autoCompleteText mt-2">
                        <input aria-label="search" placeholder="Email Search..." type="search" value={text} onChange={handleChange}></input>
                        {displaySuggestions()}
                        </div>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default InviteCoworker;