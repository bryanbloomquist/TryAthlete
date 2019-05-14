import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import ActivityRow from "./ActivityRow"

function Profile(props) {

    //run calculations
    let totalRunDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is running
        if (props.user.activities[i].sport === "run")
            //if the unit is miles
            if (props.user.activities[i].distance_measurement === "miles") {
                totalRunDistance += props.user.activities[i].distance_unit
            } else {
                //convert to miles
                totalRunDistance += (props.user.activities[i].distance_unit * 0.621371)
            }
    }
    console.log("Total run distance in miles: ", totalRunDistance)

    //swim calculations
    let totalSwimDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is swimming
        if (props.user.activities[i].sport === "swim")
            //if the unit is yards
            if (props.user.activities[i].distance_measurement === "yards") {
                totalSwimDistance += props.user.activities[i].distance_unit
            } else {
                //convert to yards
                totalSwimDistance += (props.user.activities[i].distance_unit * 1.09361)
            }
    }
    console.log("Total swim distance in yards: ", totalSwimDistance)

    //bike calculations
    let totalBikeDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is biking
        if (props.user.activities[i].sport === "bike")
            //if the unit is miles
            if (props.user.activities[i].distance_measurement === "miles") {
                totalBikeDistance += props.user.activities[i].distance_unit
            } else {
                //convert to yards
                totalBikeDistance += (props.user.activities[i].distance_unit * .621371)
            }
    }
    console.log("Total bike distance in miles: ", totalBikeDistance)

    let activityNum = props.user.activities.length;


    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Profile</h1>
                        <h2>

                        </h2>
                        <img src={props.user.imageUrl} className="text-center" alt="User Avatar" />
                    </Jumbotron>
                </Col>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Lifetime Totals</h1>
                        <ul>
                            <li>Total Bike Distance: {totalBikeDistance} miles</li>
                            <li>Total Run Distance: {totalRunDistance} miles</li>
                            <li>Total Swim Distance: {totalSwimDistance} yards</li>
                            <li>Total Activities Completed: {activityNum}</li>
                        </ul>

                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.user.activities.map(activity => {
                        console.log(activity)
                        return (
                            <ActivityRow 
                            date={activity.date}
                            sport={activity.sport}
                            distance_unit={activity.distance_unit}
                            distance_measurement={activity.distance_measurement}
                            time={activity.time}
                            />
                        )
                    })}

                </Col>
            </Row>
        </Container>
    );
}

export default Profile