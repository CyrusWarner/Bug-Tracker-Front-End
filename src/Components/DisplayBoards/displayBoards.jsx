import React from 'react';
import './displayBoards.css'

const DisplayBoards = ({userBoards}) => {
    console.log(userBoards)
    return (
        <div className="wrapper">
            {userBoards.map((board) => {
                return(
                    <div className="item">{board.title}
                    </div>
                )
                
            })}
        </div>
    )
}

export default DisplayBoards;