import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Details extends Component {
    logIn() {
        window.location.assign('/user/');
      }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>APP HOME/LANDING PAGE</h1>
                            <h2>
                                Login / Register Here - Cool Video looping?
                            </h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center">Home Page Info Here</h2>
                        <button className="btn btn-success" onClick={() => this.logIn()}>Login</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;
