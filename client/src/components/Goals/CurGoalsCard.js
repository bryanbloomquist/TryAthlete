import React from "react";
import Card from "react-bootstrap/Card";
// import GoalsList from "./GoalsList";

// Need a way to calculate progress of a Goal (user.activity entered?)
// Maybe don't calculate progress at this point in time ...MVP???



function CurGoalsCard(props) {
    return (
        <Card className="card-wide text-dark mt-0 bg-light">
            <Card.Title>Current Goals</Card.Title>
            <Card.Body className="h5">
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default CurGoalsCard;