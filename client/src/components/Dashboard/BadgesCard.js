import React from "react";
// import ArrayDisplay from "./ArrayDisplay";
import Card from "react-bootstrap/Card"

function Badges(props) {
    // const length = props.user.goals.length;
    const numBadges = props.user.badges.length;
    if (numBadges > 0) {
        return (
            <Card className="card">
                <Card.Link className="cardLink" href="/Badges">
                    <Card.Body>
                        <h2>Badges</h2>
                        {/* <ArrayDisplay length={length} badges={badges} card="badges"></ArrayDisplay> */}
                        <h4>You have earned {numBadges} badges.</h4>
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