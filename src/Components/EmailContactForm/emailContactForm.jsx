import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import emailjs from "emailjs-com";

const EmailContactForm = ({ currentUser, boardUsers }) => {
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
          console.log(error.text);
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
                <div>
                  <label>From Email:</label>
                  <input
                    defaultValue={email}
                    className="form-control"
                    name="from_email"
                    readOnly
                  ></input>
                </div>
                <label>To Board User:</label>
                <input name="to_email" className="form-control"></input>
              </div>
              <div>
                <label>Message:</label>
                <input name="message" className="form-control "></input>
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
                    <div className="item">
                    <Card className="cardContainer mt-2 mb-2"> 
                      <Card.Body><div className="fs-5">{boardUser.email}</div>
                      </Card.Body>
                    </Card>
                    </div>
                  )
              })}
              </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EmailContactForm;
