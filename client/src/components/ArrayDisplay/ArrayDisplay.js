import React from "react";

function ArrayDisplay(props) {
    console.log(props)
    console.log(props.length)
    console.log(props.goals)
    if (props.card === "goals") {
        return (
            <ul>
                {props.goals.map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
            </ul>
        )
    }
    if (props.card === "challenges") {
        return (
            <ul>
                {props.challenges.map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
            </ul>
        )
    }
    if (props.card === "badges") {
        return (
            <ul>
                {props.badges.map((value, index) => {
                    return <li key={index}>{value.name}</li>
                })}
            </ul>
        )
    }
}


export default ArrayDisplay;