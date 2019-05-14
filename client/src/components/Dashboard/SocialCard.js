import React from "react";

function SocialCard(props) {
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }

    return (
        <div className="card card-wide" style={style}>
            <h2>Social Feed</h2><br />
            <ul>
            {/* {friends.id.map((value, index) => {
                return <li key={index}>{value}</li>
            })} */}
        </ul>
        </div>
    )
}

export default SocialCard;
