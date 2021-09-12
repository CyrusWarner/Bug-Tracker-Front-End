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
          projectID="d9e3df7e-3671-478c-9f40-9edcb5b5bfd1"
          userName={firstName}
          userSecret={password}
        />
      </React.Fragment>
    </motion.div>
  );
};

export default Chat;
