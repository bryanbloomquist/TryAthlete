import React from "react";

function ChallengesCard(props) {
    console.log(props.user);

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
    // console.log(challenges)
    return (
        <div className="card" style={style}>
                Challenge Card
        </div>
    )
}

export default ChallengesCard;