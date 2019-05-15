import React from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const test = {
    sport: "Run",
    distance: "5",
    units: "miles"
}  

function ActivityCard(props) {
    console.log(props.activity)
    console.log(props.sport)
    const style = {
        backgroundColor: props.color,
        backgroundImage: "url(" + props.img + ")",
        backgroundSize: " 90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div className="card" style={style}>
            <h2>Record a {props.sport}</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Distance</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onDistanceChange} distance={props.activity.distance} type="number" placeholder="0"></Form.Control>
                    <Form.Label>Units</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onUnitChange} units={props.activity.units} as="select">
                        <option value={props.units[0]}>{props.units[0]}</option>
                        <option value={props.units[1]}>{props.units[1]}</option>
                    </Form.Control>
                    <br />
                    <Button className="btn btn-warning" block 
                    onClick={(event) => props.onLogClick(event)}>Log it</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ActivityCard;

