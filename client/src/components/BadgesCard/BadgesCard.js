import React from "react";
import ArrayDisplay from "../ArrayDisplay/ArrayDisplay";

function Badges(props) {
    console.log(props.user)
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    const length = props.user.goals.length;
    const badges = props.user.badges;
    
    return (
        <div className="card" style={style}>
            <h2>Badges</h2><br />
            <ArrayDisplay length={length} badges={badges} card="badges"></ArrayDisplay>

        </div>
    )
}

export default Badges;