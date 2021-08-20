import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
const Home = (props) => {
    const {currentUser, userBoards, getUsersBoards, getCurrentBoard} = props;
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                    <h1 className="mt-4 mb-5">Welcome Back {currentUser.firstName}</h1>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} />
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards}/>
        </React.Fragment>
    )
}

export default Home;