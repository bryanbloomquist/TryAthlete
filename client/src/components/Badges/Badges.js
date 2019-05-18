import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BadgeArrayMap from "./BadgeArrayMap";


function Badges(props) {
    const length = props.badges.length;
    const badges = props.badges;
    const user = props.user;

    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5 component-title">
                    Badges
                </Col>
            </Row>
            
            <Row>
                <BadgeArrayMap length={length} badges={badges} user={user}></BadgeArrayMap>
            </Row>
        </Container>
    );
}


export default Badges;
