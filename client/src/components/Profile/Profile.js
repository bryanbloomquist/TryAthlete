import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Profile() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Profile</h1>
                        <h2>
                            {this.state.user.fname} {this.state.user.lname}
                        </h2>
                        <img src={this.state.user.avatar} className="text-center" alt="User Avatar" />
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