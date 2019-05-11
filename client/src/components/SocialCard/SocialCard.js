import React from "react";

function SocialCard(props) {
    console.log(props.user);
    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    console.log(style);

    const friends = {
        ...props.user.friends
    }

    // for (i=1; i<goals)
    console.log(friends)
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
