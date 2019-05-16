import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GoalForm(props) {
    return (
        <Form>
            <Form.Group as={Row} controlId="newGoal">
                <Form.Label column sm={4} className="text-right my-2">Sport:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="sport" className="my-2" as="select" onChange={props.onGoalChange}>
                        <option defaultValue>Run</option>
                        <option>Bike</option>
                        <option>Swim</option>
                    </Form.Control>
                </Col>
                <Form.Label column sm={4} className="text-right  my-2">Type:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="type" className="my-2" as="select" onChange={props.onGoalChange}>
                        <option defaultValue>Distance</option>
                        <option>Frequency</option>
                        <option>Time</option>
                    </Form.Control>
                </Col>
                <Form.Label column sm={4} className="text-right my-2">Qty:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="qty" className="my-2" inputRef={goalQty => this.textInput = goalQty} type="text" onChange={props.onGoalChange} placeholder="1" />
                </Col>
                <Form.Label column sm={4} className="text-right my-2">Unit:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange}>
                        <option defaultValue>mi</option>
                        <option>km</option>
                        <option>hours</option>
                        <option>days</option>
                        <option>times</option>
                        <option>meters</option>
                        <option>yards</option>
                    </Form.Control>
                </Col>
                <Form.Label column sm={4} className="text-right my-2">Time frame:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onGoalChange}>
                        <option>Today</option>
                        <option defaultValue>This Week</option>
                    </Form.Control>
                </Col>
                <Col sm={{ span: 9, offset: 1 }}>
                    <Button variant="warning" size="lg" className="my-2" block onClick={() => props.onGoalSubmit()} >
                        Create New Goal
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default GoalForm;