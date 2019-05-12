import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ActivityCard(props) {
    const style = {
        backgroundColor: props.color,
        backgroundImage: "url(" + props.img + ")",
        backgroundSize: " 90% 90%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    
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
                    <Button type="submit" className="btn btn-warning">Log it</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ActivityCard;