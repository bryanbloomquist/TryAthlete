import React from "react";
import ArrayDisplay from "../ArrayDisplay/ArrayDisplay";

function GoalsCard(props) {
    console.log(props)
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    const length = props.user.goals.length;
    const goals = props.user.goals;
    
    return (
        <div className="card" style={style}>
            <h2>Goals</h2><br />
            <ArrayDisplay length={length} goals={goals} card="goals"></ArrayDisplay>

        </div>
    )
}

export default GoalsCard;