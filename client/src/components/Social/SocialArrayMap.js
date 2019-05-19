import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function SocialArrayMap(props) {
    if (!props.friends) {
        return null;
    }
    if (!props.friends.length) {
        return <Row>
                    <Col>
                        <h5>You need to add some friends!</h5>
                    </Col>
                </Row>
    } else {
        return(  
            props.friends.map((value, index) => {
                return (
                    <Card className="text-dark mx-auto px-1 py-1" key={index} style={{ width: '400px', backgroundColor: 'white' }}>
                        <Row className="no-gutters">
                            <Col xs={5} sm={5} md={5}>
                                <Card.Img src={value.imageUrl} className="mx-3 my-3" id="one" />
                            </Col>
                            <Col xs={7} sm={7} md={7} className="my-auto">
                                <Card.Body>
                                    <Card.Title>{value.givenName} {value.familyName}</Card.Title>
                                    <Card.Text>{value.email}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })
        )}
    }
    


export default SocialArrayMap;