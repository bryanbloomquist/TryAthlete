import React from "react";

function GoalsCard(props) {
    console.log(props.user.data);

    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    const goals = {
        ...props.goals
    }

    // for (i=1; i<goals)
    console.log(goals)
    return (
        <div className="card" style={style}>
            <h2>Goals</h2><br/>
            {props.user.data.givenName}
            {/* <ul>
                {goals.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul> */}
            {/* <p>{goals[1].activity} {goals[1].goalQuant} {goals[1].goalType.unit} {goals[1].goalType.frequency}</p>
            <p>{props.user.goals[2].activity} {props.user.goals[2].goalQuant} {props.user.goals[2].goalType.unit} {props.user.goals[2].goalType.frequency}</p> */}
            
        </div>
    )
}

export default GoalsCard;