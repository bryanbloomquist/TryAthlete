import React from "react";
import "./SwimCard.css"

function SwimCard(props) {
    console.log(props);
    return (
        <div className="card">
            <h2>Record a Swim</h2>
            <form>
                <label>Distance
                    <input type="number" min="0" max="100"></input>
                </label>
                <label>Units
                    <select>
                        <option value="meters">meters</option>
                        <option value="yards">yards</option>
                    </select>
                </label>
                <br />
                    <button type="submit" className="btn btn-danger">Log it</button>
            </form>
        </div>
    )
}

export default SwimCard;