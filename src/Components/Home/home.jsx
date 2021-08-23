import React, {useEffect} from 'react';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
const Home = (props) => {

    useEffect(() => {
        setCurrentBoard([])
    },[])
    const {currentUser, userBoards, getUsersBoards, getCurrentBoard, setCurrentBoard, currentBoard} = props;
    return (
        <React.Fragment>
            <div>
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards} currentBoard={currentBoard}/>
            </div>
            <div>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} getUsersBoards={getUsersBoards}/>
            </div>
        </React.Fragment>
    )
}

export default Home;