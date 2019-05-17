import React from "react";
import ArrayDisplay from "./ArrayDisplay";
import Card from "react-bootstrap/Card"

function Badges(props) {
    const length = props.user.goals.length;
    const badges = props.user.badges;
    if (props.badges) {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Badges">
                    <Card.Body>
                        <h2>Badges</h2>
                        <ArrayDisplay length={length} badges={badges} card="badges"></ArrayDisplay>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
    else {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Badges">
                    <Card.Body>
                        <h2>Badges</h2>
                        <p>No badges yet</p>
                    </Card.Body>
                </Card.Link>
            </Card>
        )
    }
}

export default Badges;