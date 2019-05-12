import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Social(props) {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Social Feed</h1>
                        <h2>
                            {props.user.fname} {props.user.lname}
                        </h2>
                        <img src={props.user.avatar} className="text-center" alt="User Avatar" />
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-center">User Detials Area</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Social;
