import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";

function ActivityCard(props) {
    console.log(props)
    const style = {
        backgroundColor: props.color,
        backgroundImage: "url(" + props.img + ")",
        backgroundSize: " 90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    console.log(props)
    return (
        <div className="card" style={style}>
            <h2>Record a {props.sport}</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Length</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onDistanceChange} placeholder="0" min={0} distance={props.activity.distance} type="number"></Form.Control>
                    <Form.Label>Units</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onUnitChange} units={props.activity.units} as="select">
                        <option value={props.units[0]}>{props.units[0]}</option>
                        <option value={props.units[1]}>{props.units[1]}</option>
                    </Form.Control>
                    <Form.Label>Duration (Minutes)</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onDurationChange} placeholder="0" min={0} distance={props.activity.duration} type="number"></Form.Control>
                    <br />
                    <Button className="btn btn-warning" block
                        onClick={(event) => props.onLogClick(event, props.sport)}>Log it</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ActivityCard;

