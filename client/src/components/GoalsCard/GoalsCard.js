import React from "react";
import GoalDisplay from "./GoalDisplay";

function GoalsCard(props) {
    console.log(props.user)
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
            <GoalDisplay length={length} goals={goals}></GoalDisplay>

        </div>
    )
}

export default GoalsCard;