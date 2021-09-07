import axios from 'axios';
import React from 'react';
import { motion } from 'framer-motion';
import IssueForm from '../IssueForm/issueForm';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShowMoreText from "react-show-more-text";
import ShowAllIssues from '../ShowAllIssues/showAllIssues';
import { toast } from 'react-toastify';
const ShowBoard = ({currentBoard, currentUser, userRole, displayBoardUsers}) => {
    const {title, description, boardId} = currentBoard
    const { userId } = currentUser;
    const [allIssues, setAllIssues] = useState([]);
    useEffect(() => {
        getAllIssues();
        displayBoardUsers(boardId);
    }, [currentBoard])

    const getAllIssues = async () => {
        if(boardId !== undefined) {
            await axios.get(`http://localhost:27029/api/Issues/BoardIssues/${boardId}`).then((res) => {
                if(res.status === 200){
                    setAllIssues(res.data);
                }
            })
        }
    }

    const onSubmit = async (issueData, e) => {
        
      const data = {
        title: issueData.title,
        description: issueData.description,
        userId: userId,
        boardId: boardId,
      };
      await axios
        .post("http://localhost:27029/api/Issues", data)
        .then((res) => {
          if (res.status === 200) {
            getAllIssues();
            toast.success("Bug Added Successfully");
          }
        })
        .catch((err) => {
          if (err) {
            toast.error("Error Occured While Adding Bug");
          }
        });
        e.target.reset();
    };
    return (
        <div data-testid="showBoard-1">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <React.Fragment>
            {currentBoard.length !== 0 &&
            <Container >
                <Row>
                    <Col sm={6}>
                        <h1 className="title">
                        {title}
                        </h1>
                        <ShowMoreText
                        lines={3}
                        className="Roboto-font fs-5"
                        more="Show More"
                        less="Show Less"
                        expanded={false}
                        >
                        <p className="Roboto-font fs-5">{description}</p>
                        </ShowMoreText> 
                        {(userRole === "Admin" || userRole === "Board Owner") &&
                        <div data-testid="showBoard-2">
                        <IssueForm currentUser={currentUser} currentBoard={currentBoard} getAllIssues={getAllIssues} onSubmit={onSubmit}/>
                        </div>
                        }
                        </Col>
                    <Col sm={6}>
            <ShowAllIssues allIssues={allIssues} getAllIssues={getAllIssues} currentUser={currentUser} userRole={userRole}/>
                    </Col>
                </Row>
            </Container>
            }
        </React.Fragment>
        </motion.div>
        </div>
        
    )
}

export default ShowBoard;