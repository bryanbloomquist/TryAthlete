import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UnfriendBtn from "./UnfriendBtn";

function SocialArrayMap(props) {
    if (!props.friends) {
        return null;
    }
    if (!props.friends.length) {
        return  <Col xs={3} className="h3 text-center text-white mx-auto bg-info p-3">
                    You need to add some friends!
                </Col>
    } else {
        return(  
            props.friends.map((value, index) => {
                return (
                    <Card className="text-dark mx-auto px-1 py-1" key={index} style={{ width: '400px', backgroundColor: 'white' }}>
                        <Row className="no-gutters">
                            <Col xs={5} sm={5} md={5}>
                                <Card.Img src={value.imageUrl} className="mx-3 my-3 rounded-circle" id="one" />
                            </Col>
                            <Col xs={7} sm={7} md={7} className="my-auto">
                                <Card.Body>
                                    <Card.Title className="text-center">{value.givenName} {value.familyName}</Card.Title>
                                    <Card.Text className="text-center">{value.email}</Card.Text>
                                    <UnfriendBtn className="float-right mt-2" onClick={() => props.onUnfriend(value.id)}/>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                )
            })
        )}
    }
    


export default SocialArrayMap;