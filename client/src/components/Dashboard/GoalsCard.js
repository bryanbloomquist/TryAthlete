import React from "react";
import ArrayDisplay from "./ArrayDisplay";
import Card from "react-bootstrap/Card"

function GoalsCard(props) {
    const length = props.user.goals.length;
    const goals = props.user.goals;
    if (props.user.goals[0]) {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Goals">
                    <Card.Body>
                        <h2>Goals</h2>
                        <ArrayDisplay length={length} goals={goals} card="goals"></ArrayDisplay>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
    else {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Goals">
                    <Card.Body>
                        <h2>Goals</h2>
                        <p>Set a goal!</p>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
}

export default GoalsCard;