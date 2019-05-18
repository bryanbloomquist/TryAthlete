import React from "react";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import ActivityRow from "./ActivityRow"


function Profile(props) {
    console.log(props)
    let style = {
        ul: {
            listStyle: "none",
            margin: "none",
            padding: "0"
        },
        li: {
            padding: "5px"
        },
        jumbo: {
            textAlign: "center",
            background: "none",
            marginBottom: "10px",
            paddingBottom: "10px"

        },
        header: {
            textAlign: "center",
            width: "50%"
        },
        span: {
            fontWeight: "900"
        },
        image: {
            margin: "10px"
        },
        info: {
            textAlign: 'center'
        }

    }

    //run calculations
    let totalRunDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is running
        if (props.user.activities[i].sport === "Run")
            //if the unit is miles
            if (props.user.activities[i].units === "mi") {
                totalRunDistance += parseInt(props.user.activities[i].distance)
            } else {
                //convert to miles
                totalRunDistance += (parseInt(props.user.activities[i].distance) * 0.621371)
            }
    }
    console.log("Total run distance in miles: ", totalRunDistance)

    //swim calculations
    let totalSwimDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is swimming
        if (props.user.activities[i].sport === "Swim")
            //if the unit is yards
            if (props.user.activities[i].units === "yards") {
                totalSwimDistance += parseInt(props.user.activities[i].distance)
            } else {
                //convert to yards
                totalSwimDistance += (parseInt(props.user.activities[i].distance) * 1.09361)
            }
    }
    console.log("Total swim distance in yards: ", totalSwimDistance)

    //bike calculations
    let totalBikeDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is biking
        if (props.user.activities[i].sport === "Ride")
            //if the unit is miles
            if (props.user.activities[i].units === "mi") {
                totalBikeDistance += parseInt(props.user.activities[i].distance)
            } else {
                //convert to yards
                totalBikeDistance += (parseInt(props.user.activities[i].distance) * .621371)
            }
    }
    console.log("Total bike distance in miles: ", totalBikeDistance)

    let activityNum = props.user.activities.length;

    return (
        <Container fluid>
            <Row>
                <Col size="md-12" style={style.header}>
                    <Jumbotron style={style.jumbo}>
                        <h1>{props.user.givenName} {props.user.familyName}</h1>
                        <h2>

                        </h2>
                        <img src={props.user.imageUrl} style={style.image} className="text-center" alt="User Avatar" />
                        <hr></hr>
                        <h4>Lifetime Totals</h4>
                        <ul style={style.ul}>
                            <li style={style.li}><span style={style.span}>Bike:</span> {totalBikeDistance.toFixed(2)} miles</li>
                            <li style={style.li}><span style={style.span}>Run:</span> {totalRunDistance.toFixed(2)} miles</li>
                            <li style={style.li}><span style={style.span}>Swim:</span> {totalSwimDistance.toFixed(2)} yards</li>
                            <li style={style.li}>Total Activities Completed: {activityNum}</li>
                        </ul>
                        <hr></hr>
                    </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col style={style.info}>
                    <h4>Activity Log</h4>

                    {props.user.activities.map(activity => {
                        console.log(activity)
                        return (
                            <ActivityRow
                                key={activity.id}
                                sport={activity.sport}
                                distance={activity.distance}
                                duration={activity.duration}
                                units={activity.units}
                                time={activity.time}
                                id={activity.id}
                                delete={props.delete}
                            />
                        )
                    })}

                </Col>
            </Row>
        </Container>
    );
}

export default Profile