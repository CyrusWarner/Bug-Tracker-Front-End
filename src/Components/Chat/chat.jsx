import React, { useEffect } from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  useEffect(() => {}, []);
  return (
    <ChatEngine
      publicKey="3bbece5e-9153-4f6e-b476-7f10c32f18a0"
      userName={firstName}
      userSecret={password}
    />
  );
};

export default Chat;
