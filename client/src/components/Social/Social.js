import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import SocialArrayMap from "./SocialArrayMap";


function Social(props) {
    const length = props.friends.length;
    const friends = props.friends;
    const user = props.user;
    
    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5 component-title">
                    Friends
                </Col>
            </Row>
            <Row>
                <SocialArrayMap length={length} friends={friends} user={user}></SocialArrayMap>
            </Row>
        </Container>
    );
}

export default Social;
