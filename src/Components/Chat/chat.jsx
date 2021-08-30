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
      projectID="3bbece5e-9153-4f6e-b476-7f10c32f18a0"
      userName={firstName}
      userSecret={password}
    />
    </React.Fragment>
    </motion.div>
  );
};

export default Chat;
