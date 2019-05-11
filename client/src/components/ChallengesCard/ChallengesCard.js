import React from "react";

function ChallengesCard(props) {

    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    const challenges = {
        ...props.user.challenges
    }

    // for (i=1; i<goals)

    return (
        <div className="card" style={style}>
            <h2>Challenges</h2><br />
            {/* <ul>
                {goals.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul> */}
            {/* <p>{challenges[1].activity} {challenges[1].goalQuant} {challenges[1].goalType.unit} {challenges[1].goalType.frequency}</p> */}
            
        </div>
    )
}

export default ChallengesCard;