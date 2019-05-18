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

    return (
        <div className="card" style={style}>
            <h2>Record a {props.sport}</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Length</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onDistanceChange} distance={props.activity.distance} type="number" placeholder="0"></Form.Control>
                    <Form.Label>Units</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onUnitChange} units={props.activity.units} as="select">
                        <option value={props.units[0]}>{props.units[0]}</option>
                        <option value={props.units[1]}>{props.units[1]}</option>
                    </Form.Control>
                    <Form.Label>Duration (Minutes)</Form.Label>
                    <Form.Control name={props.sport} onChange={props.onDurationChange} distance={props.activity.duration} type="number" placeholder="0"></Form.Control>
                    <br />
                    <Button className="btn btn-warning" block
                        onClick={(event) => props.onLogClick(event, props.sport)}>Log it</Button>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={props.handleShow}>
                Launch demo modal
        </Button>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ActivityCard;

