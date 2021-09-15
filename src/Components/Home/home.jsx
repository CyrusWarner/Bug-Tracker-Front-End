import React, { useEffect } from "react";
import DisplayBoards from "../DisplayBoards/displayBoards";
import CreateBoard from "../CreateBoard/createBoard";
import InvitedBoards from "../InvitedBoards/invitedBoards";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
const Home = ({
  currentUser,
  userBoards,
  getUsersBoards,
  getCurrentBoard,
  setCurrentBoard,
  currentBoard,
  invitedBoards,
  displayInvitedBoards,
}) => {
  const { userId } = currentUser;
  useEffect(() => {
    setCurrentBoard([]);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <React.Fragment>
        <div>
          <Container className="mt-5">
            <Row>
              <Col sm={6}>
                <CreateBoard
                  userId={userId}
                  getUsersBoards={getUsersBoards}
                  currentBoard={currentBoard}
                />

                <DisplayBoards
                  userBoards={userBoards}
                  getCurrentBoard={getCurrentBoard}
                />
              </Col>
              <Col sm={6}>
                <InvitedBoards
                  userId={userId}
                  invitedBoards={invitedBoards}
                  displayInvitedBoards={displayInvitedBoards}
                  getUsersBoards={getUsersBoards}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div></div>
      </React.Fragment>
    </motion.div>
  );
};

export default Home;
