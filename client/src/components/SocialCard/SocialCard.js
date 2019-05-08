import React from "react";

function SocialCard(props) {
    // console.log(props);
    const style = {
        backgroundColor: "black",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    console.log(style);
    return (
        <div className="card card-wide" style={style}>
            <h2>Social Feed</h2><br />
            
        </div>
    )
}

export default SocialCard;