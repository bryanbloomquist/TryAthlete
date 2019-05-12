import React from "react";

function GoalsCard(props) {
    console.log(props)
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    // console.log(props.user.goals.length);
    
    // console.log(props.user.goals[0])
    // console.log(length);
    // let activityArray = []

    // for (let i = 1; i < 1 + 1; i++) {
    //     activityArray.push(goals[i])
    // }

    // var finalGoals = activityArray.map(goal => ({ activity: goal. }))

    // for (i=1; i<goals)

    return (
        <div className="card" style={style}>
            <h2>Goals</h2><br />
            {props.user.givenName}
            {props.user.goals[0].sport}
            {/* <p>{goals[1].activity} {goals[1].goalQuant} {goals[1].goalType.unit} {goals[1].goalType.frequency}</p>
            <p>{props.user.goals[2].activity} {props.user.goals[2].goalQuant} {props.user.goals[2].goalType.unit} {props.user.goals[2].goalType.frequency}</p> */}

        </div>
    )
}

export default GoalsCard;