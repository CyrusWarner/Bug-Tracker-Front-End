import React from 'react';
import './displayBoards.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const DisplayBoards = ({userBoards, getCurrentBoard}) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
        <div className="wrapper">
            {userBoards.map((board) => {
                return(
                    <React.Fragment>
                        <Link 
                        onClick={() => (getCurrentBoard(board.boardId))}
                        to={`/ShowBoard/${board.boardId}`}
                        style={{textDecoration: "none"}}>
                    <div className="item">{board.title}</div>
                    </Link>
                    </React.Fragment>
                )
                
            })}
        </div>
        </Col>
        <Col sm={1}></Col>
        </Row>
        </Container>
        </React.Fragment>
    )
}

export default DisplayBoards;