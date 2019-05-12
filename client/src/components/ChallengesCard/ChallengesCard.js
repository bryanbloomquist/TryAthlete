import React from "react";

function ChallengesCard(props) {

    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    // const challenges = {
    //     ...props.user.challenges
    // }

    // for (i=1; i<goals)
<<<<<<< HEAD
    // console.log(challenges)
    return (
        <div className="card" style={style}>
                Challenge Card
=======

    return (
        <div className="card" style={style}>
            <h2>Challenges</h2><br />
            {/* <ul>
                {goals.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul> */}
            {/* <p>{challenges[1].activity} {challenges[1].goalQuant} {challenges[1].goalType.unit} {challenges[1].goalType.frequency}</p> */}
            
>>>>>>> ff651ee4bc6d59446860812853a23f1d2d95c3b1
        </div>
    )
}

export default ChallengesCard;