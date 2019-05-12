import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Logo from "../images/logo-white.svg"

function Home(props) {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron className="homeJumbo">
                    
                        <Image className="logo" src={Logo} alt="logo" fluid></Image>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center slogan">Push Yourself, Pull For Everyone</h2>
                </Col>
            </Row>
            <BackgroundVideo />
        </Container>
    );
}

export default Home;
