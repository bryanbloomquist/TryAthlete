import React from "react";

function GoalDisplay(props) {
    console.log(props);

    for (let i = 0; i < props.length; i++) {

        return (
            <div>
                {props.goals[i].name}
            </div>
        )
    }
}
export default GoalDisplay;