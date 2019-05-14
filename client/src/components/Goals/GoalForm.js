import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

var newGoal = {
    name: "Swim 2 Times This Week",
    sport: "Swim",
    isAchieved: false,
    goalType: "Frequency",
    goalQty: 2,
    goalUnit: "Times",
    goalTimeFrame: "This Week",
};

// How to pull Form data into a Variable called "newGoal"???


function GoalForm(props) {

    console.log(newGoal);
    console.log("props are: ", props);

    return (
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
                <Col sm={3}>
                    <Form.Control inputRef={goalQty => this.textInput = goalQty} type="text" />
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
                        <option>Meters</option>
                        <option>Yards</option>
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
                <Button variant="warning" size="lg" block onClick={() => API.saveGoal( newGoal, props.user._id )} >
                    Create New Goal
                </Button>
            </Col>
        </Form>
    );
}

export default GoalForm;