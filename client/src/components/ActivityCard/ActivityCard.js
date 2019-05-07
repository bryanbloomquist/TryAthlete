import React from "react";

function ActivityCard(props) {
    // console.log(props);
    const style = {
        backgroundColor: props.color,
        backgroundImage: "url("+props.img+")",
        backgroundSize: " 100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
    console.log(style);
    return (
        <div className="card" style={style}>
            <h2>Record a {props.activity}</h2><br />
            <form>
                <label>Distance<br />
                    <input type="number"></input>
                </label><br /><br />
                <label>Units<br />
                    <select>
                        <option value="unit1">{props.units[0]}</option>
                        <option value="unit2">{props.units[1]}</option>
                    </select>
                </label>
                <br /><br />
                <button type="submit" className="btn btn-danger">Log it</button>
            </form>
        </div>
    )
}

export default ActivityCard;