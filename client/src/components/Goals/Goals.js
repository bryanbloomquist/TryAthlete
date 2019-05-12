import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import API from "../../utils/API";



function Goals(props) {
    console.log(props);
    var fname = props.user.givenName.charAt(0).toUpperCase() + props.user.givenName.slice(1);
    var newGoal = {
        name: "Swim 2 Times This Week",
        sport: "Swim",
        isAchieved: false,
        goalType: "Frequency",
        goalQty: 2,
        goalUnit: "Times",
        goalTimeFrame: "This Week",
    };

console.log(newGoal);

    return (
        <Container fluid className="pb-5">
            <Row>
                <Col className="display-3 text-center py-5">
                    Goal Details for {fname}
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
                                    <option>Times</option>
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
                        <Col sm={{ span: 9, offset: 1 }}>
                            <Button variant="warning" size="lg" block onClick={() => API.saveGoal({newGoal})} >
                                Create New Goal
                            </Button>
                        </Col>
                    </Form>

                </Col>
                <Col md={8}>
                    <Row>
                        <Col>
                            <Card className="card-wide text-dark mt-0">
                                <Card.Title>Current Goals</Card.Title>
                                <Card.Body className="h5">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>{props.user.goals[0].name}
                                            <div className="progress-bar bg-warning" style={{ width: "50%" }}> </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>{props.user.goals[1].name}
                                            <div className="progress-bar bg-danger" style={{ width: "25%" }}> </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card-wide text-dark">
                                <Card.Title>Lifetime Acheivements</Card.Title>
                                <Card.Body className="h5">
                                    <Row className="mb-2">
                                        <Col md={2}>
                                            Run
                                        </Col>
                                        <Col md={10}>
                                            <div className="progress-bar bg-success rounded" style={{ width: "80%" }}>80%</div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-2">
                                        <Col md={2}>
                                            Bike
                                        </Col>
                                        <Col md={10}>
                                            <div className="progress-bar bg-primary rounded" style={{ width: "60%" }}>60%</div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-2">
                                        <Col md={2}>
                                            Swim
                                        </Col>
                                        <Col md={10}>
                                            <div className="progress-bar bg-danger rounded" style={{ width: "20%" }}>20%</div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Goals;
