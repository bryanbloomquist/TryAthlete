import React from "react";

function ArrayDisplay(props) {
    console.log(props.badges)
    console.log(props.goals)
    for (let i = 0; i < props.length; i++) {
        if (props.card === "goals") {
            return (
                <div>
                    {props.goals[i].name}
                </div>
            )
        }
        if (props.card === "challenges") {
            return (
                <div>
                    {props.challenges[i].name}
                </div>
            )
        }
        if (props.card === "badges") {
            return (
                <div>
                    {props.badges[i].id}
                </div>
            )
        }
    }
}

export default ArrayDisplay;