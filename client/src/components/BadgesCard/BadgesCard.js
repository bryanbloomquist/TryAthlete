import React from "react";

function BadgesCard(props) {

    const style = {
        backgroundColor: "slategray",
        // backgroundImage: "url("+props.img+")",
        // backgroundSize: " 100% 100%",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
    }
    // const badges = {
    //     ...props.user.badges
    // }

    // for (i=1; i<goals)
<<<<<<< HEAD
    // console.log(badges)
=======

>>>>>>> ff651ee4bc6d59446860812853a23f1d2d95c3b1
    return (
        <div className="card" style={style}>
            <h2>Badges</h2><br />
            <ul>
                {/* {badges.id.map((value, index) => {
                    return <li key={index}>{value}</li>
                })} */}
            </ul>
            <p>Hi</p>
            
        </div>
    )
}

export default BadgesCard;