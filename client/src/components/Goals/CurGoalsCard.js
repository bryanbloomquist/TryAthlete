import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CurGoalsCard(props) {
    console.log(props)
    return (
        <Card className="card-wide text-dark mt-0 bg-light">
            <Card.Title>Current Goals</Card.Title>
            <Card.Body className="h5">
                <ListGroup variant="flush">
                    <ListGroup.Item className="bg-light">{props.userGoals[0].name}
                        <div className="progress-bar bg-warning" style={{ width: "50%" }}> </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-light">{props.userGoals[1].name}
                        <div className="progress-bar bg-danger" style={{ width: "25%" }}> </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default CurGoalsCard;