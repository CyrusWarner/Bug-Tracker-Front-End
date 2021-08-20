import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShowAllIssues = ({allIssues}) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <div className="wrapper">
                        {allIssues.map((issue) => {
                            return(
                                <div className="item">{issue.title}</div>
                                //PUT A CARD HERE FOR EACH ITEM AND MAKE IT A SCROLL BAR
                            )
                        })}
                        </div>

                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ShowAllIssues