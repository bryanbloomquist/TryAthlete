import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'

var localProps = {
    user: {
        id: 1,
        givenName: "Test User"
    }
}


function Goals(props) {
    console.log(props);
    return (
        <Container fluid className="py-0">
            <Row>
                <Col className="display-3 text-center py-5">
                    Goal Details for {localProps.user.givenName}
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Form>
                        <Form.Group controlId="goalActivity">
                            <Form.Label>Activity</Form.Label>
                            <Form.Control as="select">
                                <option>Run</option>
                                <option>Bike</option>
                                <option>Swim</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="goalType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
                                <option>Distance</option>
                                <option>Frequency</option>
                                <option>Time</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="goalQty">
                            <Form.Label>Qty</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>


                        
                    </Form>

                </Col>
                <Col>
                    On Deck <br />
                    Lifetime Acheivements
                </Col>
            </Row>
        </Container>
    );
}

export default Goals;
