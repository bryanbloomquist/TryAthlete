import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GoalForm(props) {
    let unitOptionOne = <option>mi</option>;
    let unitOptionTwo = <option>km</option>;
    let unitOptionThree = <option>meters</option>;
    let unitOptionFour = <option>yards</option>;
    let unitOptionFive = <option>times</option>;
    let unitOptionSix = <option>minutes</option>;

    let type = props.curGoal.type;
    let sport = props.curGoal.sport;
    console.log(type)
    if (type === "Distance") {
        //if the sport is run or bike
        if (sport === "Run" || sport === "Ride") {
            unitOptionThree = <option disabled>meters</option>;
            unitOptionFour = <option disabled>yards</option>;
            unitOptionFive = <option disabled>times</option>;
            unitOptionSix = <option disabled>minutes</option>;
        } else {
            //unitOptions = //set options to meters/yards
            unitOptionOne = <option disabled>mi</option>;
            unitOptionTwo = <option disabled>km</option>;
            unitOptionFive = <option disabled>times</option>;
            unitOptionSix = <option disabled>minutes</option>;
        }

    } else if (type === "Frequency") {
        //unitOptions = //set options to times/days
        unitOptionOne = <option disabled>mi</option>;
        unitOptionTwo = <option disabled>km</option>;
        unitOptionThree = <option disabled>meters</option>;
        unitOptionFour = <option disabled>yards</option>;
        unitOptionSix = <option disabled>minutes</option>;
    } else {
        //unitOptions = //set options to minutes
        unitOptionOne = <option disabled>mi</option>;
        unitOptionTwo = <option disabled>km</option>;
        unitOptionThree = <option disabled>meters</option>;
        unitOptionFour = <option disabled>yards</option>;
        unitOptionFive = <option disabled>times</option>;
    }


    console.log(props.curGoal)
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
                    <Form.Control name="qty" className="my-2" type="text" onChange={props.onGoalChange} placeholder="1" />
                </Col>
                <Form.Label column sm={4} className="text-right my-2">Unit:</Form.Label>
                <Col sm={6}>
                    <Form.Control name="unit" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="">
                        <option disabled></option>
                        {unitOptionOne}
                        {unitOptionTwo}
                        {unitOptionThree}
                        {unitOptionFour}
                        {unitOptionFive}
                        {unitOptionSix}
                    </Form.Control>
                </Col>
                <Form.Label column xs={4} md={12} lg={4} className="text-right my-2">Time frame:</Form.Label>
                <Col xs={8} md={12} lg={8}>
                    <Form.Control name="timeframe" className="my-2" as="select" onChange={props.onGoalChange} defaultValue="This Week">
                        <option>today</option>
                        <option>this week</option>
                    </Form.Control>
                </Col>
                <Col xs={{ span: 9, offset: 1 }}>
                    <Button type="submit" variant="warning" size="lg" className="my-2" block onClick={() => props.onGoalSubmit()} >
                        Create New Goal
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default GoalForm;