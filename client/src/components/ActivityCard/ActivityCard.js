import React from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const test = {
    sport: "Run",
    distance: "5",
    units: "miles"
}  

var newGoal = {
    name: "Swim 2 Times This Week",
    sport: "Swim",
    isAchieved: false,
    goalType: "Frequency",
    goalQty: 2,
    goalUnit: "Times",
    goalTimeFrame: "This Week",
};

function ActivityCard(props) {
    console.log(props.user.user._id)
    const style = {
        backgroundColor: props.color,
        backgroundImage: "url(" + props.img + ")",
        backgroundSize: " 90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    const id = props.user._id

    return (
        <div className="card" style={style}>
            <h2>Record a {props.activity}</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Distance</Form.Label>
                    <Form.Control type="number" placeholder="1"></Form.Control>
                    <Form.Label>Units</Form.Label>
                    <Form.Control as="select">
                        <option value="unit1">{props.units[0]}</option>
                        <option value="unit2">{props.units[1]}</option>
                    </Form.Control>
                    <br />
                    <Button className="btn btn-warning" block onClick={() => API.saveGoal( props.user.user._id, newGoal)}>Log it</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ActivityCard;

