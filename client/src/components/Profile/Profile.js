import React from "react";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import ActivityRow from "./ActivityRow";
import Calculations from "./calculateTotals";
import Style from "./profileStyle"


function Profile(props) {


    let activityNum = props.user.activities.length;

    return (
        <Container fluid>
            <Row>
                <Col size="md-12" style={Style.header}>
                    <Jumbotron style={Style.jumbo}>
                        <h1>{props.user.givenName} {props.user.familyName}</h1>
                        <h2>

                        </h2>
                        <img src={props.user.imageUrl} style={Style.image} className="text-center" alt="User Avatar" />
                        <hr></hr>
                        <h4>Lifetime Totals</h4>
                        <ul style={Style.ul}>
                            <li style={Style.li}><span style={Style.span}>Bike: </span>{Calculations.calcTotalBike(props.user.activities).toFixed(2)} miles</li>
                            <li style={Style.li}><span style={Style.span}>Run:</span> {Calculations.calcTotalRun(props.user.activities).toFixed(2)} miles</li>
                            <li style={Style.li}><span style={Style.span}>Swim:</span> {Calculations.calcTotalSwim(props.user.activities).toFixed(2)} yards</li>
                            <li style={Style.li}>Total Activities Completed: {activityNum}</li>
                        </ul>
                        <hr></hr>
                    </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col style={Style.info}>
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