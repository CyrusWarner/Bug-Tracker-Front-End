import React from "react";
import { ChatEngine } from "react-chat-engine";
import './chat.css'
import { Container, Row, Col } from "react-bootstrap";
const Chat = ({ currentUser }) => {
  const { firstName, password } = currentUser;
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="title">Chat</h1>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
      <div className="chatBody">
          <ChatEngine
      publicKey="3bbece5e-9153-4f6e-b476-7f10c32f18a0"
      userName={firstName}
      userSecret={password}
    />
    </div>
    </React.Fragment>
  );
};

export default Chat;
