import React from "react";
import ArrayDisplay from "./ArrayDisplay";
import Card from "react-bootstrap/Card"

function ChallengesCard(props) {
    const length = props.user.challenges.length;
    const challenges = props.user.challenges;
    if (props.challenges) {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Challenges">
                    <Card.Body>
                        <h2>Challenges</h2>
                        <ArrayDisplay length={length} challenges={challenges} card="challenges"></ArrayDisplay>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
    else {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Challenges">
                    <Card.Body>
                        <h2>Challenges</h2>
                        <p>No challenges yet</p>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
}

export default ChallengesCard;