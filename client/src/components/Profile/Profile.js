import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Profile(props) {
    console.log(props.user)
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Profile</h1>
                        <h2>
                            
                        </h2>
                        <img src="" className="text-center" alt="User Avatar" />
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-center">User Dashboard Area</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile