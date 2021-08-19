import React from 'react';
import './displayBoards.css'
import { Link } from 'react-router-dom';
const DisplayBoards = ({userBoards}) => {
    console.log(userBoards)
    return (
        <div className="wrapper">
            {userBoards.map((board) => {
                return(
                    <React.Fragment>
                        <Link to={`/ShowBoard/${board.boardId}`}
                        style={{textDecoration: "none"}}>
                    <div className="item">{board.title}</div>
                    </Link>
                    </React.Fragment>
                )
                
            })}
        </div>
    )
}

export default DisplayBoards;