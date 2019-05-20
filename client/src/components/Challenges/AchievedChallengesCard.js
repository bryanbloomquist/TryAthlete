import React from "react";
import Card from "react-bootstrap/Card";


function CurChallengesCard(props) {
    return (
        <Card className="card-wide text-dark mt-0 bg-light">
            <Card.Title className="display-4">Achieved Challenges</Card.Title>
            <Card.Body className="h5 overflow-auto">
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default CurChallengesCard;