import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import BadgeArrayMap from "./BadgeArrayMap";


function Badges(props) {
    const length = props.badges.length;
    const badges = props.badges;
    const user = props.user;

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 class="text-center">Badges</h1>
                    </Jumbotron>
                </Col>
            </Row>
            
            <Row>
                <BadgeArrayMap length={length} badges={badges} user={user}></BadgeArrayMap>
            </Row>
        </Container>
    );
}


export default Badges;
