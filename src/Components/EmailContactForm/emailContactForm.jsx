import React, { useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import * as AiIcons from "react-icons/ai";
import CopyToClipboard from "react-copy-to-clipboard";
const EmailContactForm = ({ currentUser, boardUsers }) => {
  const [copied, setCopied] = useState(false);
  const { email } = currentUser;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ov28jj",
        "template_psd3qo7",
        e.target,
        "user_AUMUh4EYkrvWv50ynhpxX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          toast.error("Please Enter A Recipient Email and Message");
        }
      );
    e.target.reset();
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={6}>
            <form onSubmit={sendEmail}>
              <div>
                <div className="form-floating">
                  <input
                    defaultValue={email}
                    className="form-control"
                    name="from_email"
                    readOnly
                  ></input>
                  <label className="floatingInput">From Email:</label>
                </div>
                <div className="form-floating mt-2">
                  <input
                    name="to_email"
                    className="form-control"
                    placeholder="Enter Board Users Email..."
                  ></input>
                  <label className="floatingInput">
                    Enter Board Users Email...
                  </label>
                </div>
              </div>
              <div className="form-floating mt-2">
                <input
                  name="message"
                  className="form-control"
                  placeholder="Enter A Message For Your Email..."
                ></input>
                <label className="floatingInput">
                  Enter A Message For Your Email...
                </label>
              </div>
              <Button className="mt-2" type="submit">
                Send Email
              </Button>
            </form>
          </Col>
          <Col sm={6}>
            <div className="wrapper">
              {boardUsers.map((boardUser) => {
                return (
                  <div key={boardUser.userId} className="item">
                    <Card className="cardContainer mt-2 mb-2">
                      <Card.Body className="d-flex justify-content-between">
                        <div className="fs-5">{boardUser.user.email}</div>
                        <CopyToClipboard
                          text={boardUser.user.email}
                          onCopy={() => {
                            setCopied(true);
                          }}
                        >
                          <AiIcons.AiFillCopy  size="1.5rem" />
                        </CopyToClipboard>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EmailContactForm;
