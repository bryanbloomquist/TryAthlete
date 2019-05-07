import React from "react";
import "./BikeCard.css"

function BikeCard(props) {
    console.log(props);
    return (
        <div className="card">
            <h2>Record a Bike Ride</h2>
            <form>
                <label>Distance
                    <input type="number"></input>
                </label>
                <label>Units
                    <select>
                        <option value="mi">mi</option>
                        <option value="km">km</option>
                    </select>
                </label>
                <br />
                <button type="submit" className="btn btn-danger">Log it</button>
            </form>
        </div>
    )
}

export default BikeCard;