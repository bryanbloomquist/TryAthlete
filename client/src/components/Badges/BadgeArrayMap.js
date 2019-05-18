import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function BadgeArrayMap(props) {
    console.log(props);
    let badgeStyle;

    return(  
    props.badges.map((value, index) => {
        if (props.user.badges.includes(value.badgeId)) {
            badgeStyle = {
                width: "150px",
                height: "150px"
            }
        } else {
            badgeStyle = {
                width: "150px",
                height: "150px",
                filter: "grayscale(1)"
            }
        }
        return (
            <Card className="text-dark mx-auto px-1 py-1" key={index} style={{ width: '400px', backgroundColor: 'white' }}>
                <Row className="no-gutters">
                    <Col xs={5} sm={5} md={5}>
                        <Card.Img src={require(`../images/badges/${value.src}.png`)} className="mx-3 my-3" id="one" style={badgeStyle} />
                    </Col>
                    <Col xs={7} sm={7} md={7} className="my-auto">
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