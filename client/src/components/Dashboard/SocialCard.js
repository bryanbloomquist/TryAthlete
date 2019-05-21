import React from "react";
import ArrayDisplay from "./ArrayDisplay";
import Card from "react-bootstrap/Card"

function SocialCard(props) {
    
    const length = props.user.friends.length;
    const friends = props.friends;
    if (props.user.friends[0]) {
        return (
            <Card className="card card-wide">
                <Card.Link className="cardLink " href="/Social">
                    <Card.Body>
                        <h2>Friends List</h2>
                        <ArrayDisplay length={length} friends={friends} card="social"></ArrayDisplay>
                    </Card.Body>
                </Card.Link>
            </Card>
        )} else {
            return (
                <Card className="card card-wide">
                    <Card.Link className="cardLink" href="/Social">
                        <Card.Body>
                            <h2>Friends List</h2>
                            <p>Add a friend!</p>
                        </Card.Body>
                    </Card.Link>
                </Card>
            )
        }
    }

    export default SocialCard;
