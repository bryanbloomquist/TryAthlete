import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

var localProps = {
    user: {
        id: 1,
        givenName: "Test User"
    }
}


function Goals(props) {
    console.log(props);
    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5">
                    Goal Details for {localProps.user.givenName}
                </Col>
            </Row>
            <Row className="text-center py-5">
                <Col md={4}>
                    <Form>
                        <Form.Group as={Row} controlId="goalActivity">
                            <Form.Label column sm={4}>Activity:</Form.Label>
                            <Col sm={6}>
                                <Form.Control as="select">
                                    <option>Run</option>
                                    <option>Bike</option>
                                    <option>Swim</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="goalType">
                            <Form.Label column sm={4}>Type:</Form.Label>
                            <Col sm={6}>
                                <Form.Control as="select">
                                <option>Distance</option>
                                <option>Frequency</option>
                                <option>Time</option>
                            </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="goalQty">
                            <Form.Label column sm={4}>Qty:</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="goalUnit">
                            <Form.Label column sm={4}>Unit:</Form.Label>
                            <Col sm={6}>
                                <Form.Control as="select">
                                    <option>Miles</option>
                                    <option>Kilometer</option>
                                    <option>Hours</option>
                                    <option>Days</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="goalTimeframe">
                            <Form.Label column sm={4}>Time frame:</Form.Label>
                            <Col sm={6}>
                                <Form.Control as="select">
                                    <option>Today</option>
                                    <option>This Week</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Col sm={{ span: 9, offset: 1}}>
                            <Button variant="warning" size="lg" block >
                                Create New Goal
                            </Button>
                        </Col>
                    </Form>

                </Col>
                <Col md={8}>
                    On Deck <br />
                    Lifetime Acheivements
                </Col>
            </Row>
        </Container>
    );
}

export default Goals;
