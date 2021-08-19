import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
const Home = (props) => {
    const {currentUser, userBoards, getUsersBoards} = props;
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={8}>
                    <h1 className="mt-2 mb-5">Welcome Back {currentUser.firstName}</h1>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={8}><h1>Your Boards</h1>
                    <DisplayBoards userBoards={userBoards}/>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards}/>
        </React.Fragment>
    )
}

export default Home;