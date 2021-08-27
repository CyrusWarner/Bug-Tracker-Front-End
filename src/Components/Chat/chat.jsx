import React from "react";
import { ChatEngine } from "react-chat-engine";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  return (
    <React.Fragment>
          <ChatEngine
          height="100vh"
      projectID="3bbece5e-9153-4f6e-b476-7f10c32f18a0"
      userName={firstName}
      userSecret={password}
    />
    </React.Fragment>
  );
};

export default Chat;
