import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShowAllIssues from '../ShowAllIssues/showAllIssues';
const ShowBoard = ({currentBoard}) => {
    const {title, description, boardId} = currentBoard
    const [allIssues, setAllIssues] = useState([]);
    useEffect(() => {
        getAllIssues();
    }, [boardId])

    const getAllIssues = async () => {
        if(boardId !== undefined) {
            await axios.get(`http://localhost:27029/api/Issues/BoardIssues/${boardId}`).then((res) => {
                if(res.status === 200){
                    setAllIssues(res.data);
                }
            })
            .catch((err) => {
                if(err){
                    console.log(err);
                }
            })
        }
    }
    return (
        <React.Fragment>
            {currentBoard.length !== 0 &&
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <h1 className="mt-4">
                        {title}
                        </h1>
                        <p className="fs-6">{description}</p>
                        </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
            }
            <ShowAllIssues allIssues={allIssues}/>
        </React.Fragment>
        
    )
}

export default ShowBoard;