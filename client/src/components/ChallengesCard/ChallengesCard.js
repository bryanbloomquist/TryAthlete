import React from "react";
import ArrayDisplay from "../ArrayDisplay/ArrayDisplay";

function ChallengesCard(props) {
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    const length = props.user.challenges.length;
    const challenges = props.user.challenges;
    if (props.challenges) {
    return (
        <div className="card" style={style}>
            <h2>Challenges</h2><br />
            <ArrayDisplay length={length} challenges={challenges} card="challenges"></ArrayDisplay>
        </div>
    )}
    else {
        return (
            <div className="card" style={style}>
                <h2>Challenges</h2><br />
                <p>No challenges yet</p>
            </div>
        )}
}

export default ChallengesCard;