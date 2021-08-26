import React, { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import './chat.css'
import { Container } from "react-bootstrap";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  return (
    <Container>
      <div className="chatBody">
          <ChatEngine
      publicKey="3bbece5e-9153-4f6e-b476-7f10c32f18a0"
      userName={firstName}
      userSecret={password}
    />
    </div>
    </Container>
  );
};

export default Chat;
