import React from "react";

function ArrayDisplay(props) {
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
    if (props.card === "social") {
        console.log(props)
        return (
            <ul>
                {props.friends.map((value, index) => {
                    console.log(value.email);
                    return <li key={index}>{value.givenName + " " + value.familyName}</li>
                })}
            </ul>
        )
    }
}

export default ArrayDisplay;