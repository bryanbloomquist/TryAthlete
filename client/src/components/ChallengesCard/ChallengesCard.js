import React from "react";
import ArrayDisplay from "../ArrayDisplay/ArrayDisplay";

function ChallengesCard(props) {
    console.log(props.user)
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    const length = props.user.goals.length;
    const challenges = props.user.challenges;
    
    return (
        <div className="card" style={style}>
            <h2>Challenges</h2><br />
            <ArrayDisplay length={length} challenges={challenges} card="challenges"></ArrayDisplay>

        </div>
    )
}

export default ChallengesCard;