import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
const Home = (props) => {
    const {currentUser, userBoards, getUsersBoards, getCurrentBoard} = props;
    return (
        <React.Fragment>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} />
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards}/>
        </React.Fragment>
    )
}

export default Home;