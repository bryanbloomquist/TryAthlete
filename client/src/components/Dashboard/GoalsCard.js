import React from "react";
import ArrayDisplay from "./ArrayDisplay";

function GoalsCard(props) {
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    const length = props.user.goals.length;
    const goals = props.user.goals;
    console.log(props.user.goals)
    if (props.user.goals[0]) {
        return (
            <div className="card" style={style}>
                <h2>Goals</h2><br />
                <ArrayDisplay length={length} goals={goals} card="goals"></ArrayDisplay>
            </div>
        )
    }
    else {
        return (
            <div className="card" style={style}>
                <h2>Goals</h2><br />
                <p>Set a goal!</p>
            </div>
        )
    }
}

export default GoalsCard;