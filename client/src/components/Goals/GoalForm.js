import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
=======
import Card from "react-bootstrap/Card";
>>>>>>> 60a87a214cb8092ba9d6613226c82ee635047d9f
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

<<<<<<< HEAD
// How to pull Form data into a Variable called "newGoal"???
=======

>>>>>>> 60a87a214cb8092ba9d6613226c82ee635047d9f


function GoalForm(props) {

    console.log(newGoal);
<<<<<<< HEAD
    console.log("props are: ", props);

    return (
=======
    console.log("props are: ",props);

    return (
        <Card className="card-wide text-dark bg-light">
>>>>>>> 60a87a214cb8092ba9d6613226c82ee635047d9f
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
<<<<<<< HEAD
                <Button variant="warning" size="lg" block onClick={() => API.saveGoal( newGoal, props.user._id )} >
=======
                <Button variant="warning" size="lg" block onClick={() => API.saveGoal( props.user._id, newGoal)} >
>>>>>>> 60a87a214cb8092ba9d6613226c82ee635047d9f
                    Create New Goal
                </Button>
            </Col>
        </Form>
<<<<<<< HEAD
=======
        </Card>
>>>>>>> 60a87a214cb8092ba9d6613226c82ee635047d9f
    );
}

export default GoalForm;