import React, {useEffect} from 'react';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
const Home = (props) => {

    useEffect(() => {
        setCurrentBoard([])
    },[])
    const {currentUser, userBoards, getUsersBoards, getCurrentBoard, setCurrentBoard} = props;
    return (
        <React.Fragment>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} />
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards}/>
        </React.Fragment>
    )
}

export default Home;