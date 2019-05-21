import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GoalForm(props) {

console.log(props.curGoal)
return (
    <Form>
        <Form.Group as={Row} controlId="newGoal">{props.type}
            <Form.Label column sm={4} className="text-right my-2">Sport:</Form.Label>
            <Col sm={6}>
                <Form.Control name="sport" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Run">
                    <option>Run</option>
                    <option>Ride</option>
                    <option>Swim</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right  my-2">Type:</Form.Label>
            <Col sm={6}>
                <Form.Control name="type" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="Distance">
                    <option>{props.type}</option>
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Qty:</Form.Label>
            <Col sm={6}>
                <Form.Control name="qty" className="my-2" type="text" onChange={props.onGoalChange} placeholder="1" />
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Unit:</Form.Label>
            <Col sm={6}>
                <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange} /*defaultValue="mi"*/>                     
                    {props.unit.map(unit => {
                        return(
                        <option>{unit}</option>
                        )
                    })}
                </Form.Control>
            </Col>
            <Form.Label column sm={4} className="text-right my-2">Time frame:</Form.Label>
            <Col sm={6}>
                <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="This Week">
                    <option>Today</option>
                    <option>This Week</option>
                </Form.Control>
            </Col>
            <Col sm={{ span: 9, offset: 1 }}>
                <Button type="submit" variant="warning" size="lg" className="my-2" block onClick={() => props.onGoalSubmit()} >
                    Create New Goal
                    </Button>
            </Col>
        </Form.Group>
    </Form>
);
}

export default GoalForm;