import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function BadgeArrayMap(props) {
    console.log(props);
    let badgeStyle;

    if (!props.user.badges.includes(props.badgeId)) {
        badgeStyle = {
            width: "200px",
            height: "200px",
            filter: "grayscale(1)"
        }
    } else {
        badgeStyle = {
            width: "200px",
            height: "200px"
        }
    }

    return (
    props.badges.map((value, index) => {
        return (
            <Card className="text-dark mx-auto px-1 py-1" key={index} style={{width: '750px', backgroundColor: 'white'}}>
                <Row className="no-gutters">
                    <Col xs={6} sm={6} md={4}>
                        <Card.Img src={require(`../images/badges/${value.src}.png`)} className="mx-3 my-3" id="one" style={badgeStyle} />
                    </Col>
                    <Col xs={6} sm={6} md={8} className="my-auto">
                        <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>{value.description}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        )
    })
    )}

export default BadgeArrayMap;