import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GoalForm(props) {
    console.log(props)
    return (
        <Form>
            <Form.Group as={Row} controlId="newGoal">
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Sport:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="sport" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Run">
                        <option>Run</option>
                        <option>Ride</option>
                        <option>Swim</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right  my-2">Type:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="type" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Distance">
                        <option>Distance</option>
                        <option>Frequency</option>
                        <option>Time</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4}md={12} lg={4} className="text-right my-2">Qty:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="qty" className="my-2" type="number" min={1} onChange={props.onGoalChange} defaultValue={props.curGoal.qty} />
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Unit:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="mi">
                        <option>mi</option>
                        <option>km</option>
                        <option>minutes</option>
                        <option>days</option>
                        <option>times</option>
                        <option>meters</option>
                        <option>yards</option>
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Time frame:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="This Week">
                        <option>Today</option>
                        <option>This Week</option>
                    </Form.Control>
                </Col>
                <Col xs={{ span: 9, offset: 1 }}>
                    <Button type="submit" variant="warning" size="lg" className="my-2" block onClick={() => props.onGoalSubmit()} >
                        Create New Goal
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default GoalForm;