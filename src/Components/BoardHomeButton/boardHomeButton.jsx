import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BoardHomeButton = ({currentBoard}) => {
    const {boardId} = currentBoard;
    return (
        <Link to={`/ShowBoard/${boardId}`}>
        <Button>Board Home</Button>
        </Link>
    )
}

export default BoardHomeButton;