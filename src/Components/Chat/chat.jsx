import React from "react";
import { ChatEngine } from "react-chat-engine";
import { motion } from "framer-motion";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <React.Fragment>
        <ChatEngine
          height="100vh"
          projectID="bab3647a-8f5d-416c-a551-37d5bb2d5aab"
          userName={firstName}
          userSecret={password}
        />
      </React.Fragment>
    </motion.div>
  );
};

export default Chat;
