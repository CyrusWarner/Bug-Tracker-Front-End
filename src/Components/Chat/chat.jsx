import React from "react";
import { ChatEngine } from "react-chat-engine";
import { motion } from "framer-motion";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <React.Fragment>
          <ChatEngine
          height="100vh"
      projectID="77b5a68f-3892-4e26-96b1-6400dd453029"
      userName={firstName}
      userSecret={password}
    />
    </React.Fragment>
    </motion.div>
  );
};

export default Chat;
