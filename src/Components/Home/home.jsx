import React, {useEffect} from 'react';
import DisplayBoards from '../DisplayBoards/displayBoards';
import CreateBoard from '../CreateBoard/createBoard';
import { motion } from 'framer-motion';
const Home = (props) => {

    useEffect(() => {
        setCurrentBoard([])
    },[])
    const {currentUser, userBoards, getUsersBoards, getCurrentBoard, setCurrentBoard, currentBoard} = props;
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <React.Fragment>
            <div>
            <CreateBoard currentUser={currentUser} getUsersBoards={getUsersBoards} currentBoard={currentBoard}/>
            </div>
            <div>
            <DisplayBoards userBoards={userBoards} getCurrentBoard={getCurrentBoard} getUsersBoards={getUsersBoards}/>
            </div>
        </React.Fragment>
        </motion.div>
    )
}

export default Home;