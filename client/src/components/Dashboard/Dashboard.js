import React from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//Components
import ActivityCard from "./ActivityCard";
import BadgesCard from "./BadgesCard";
import ChallengesCard from "./ChallengesCard";
import GoalsCard from "./GoalsCard";
import SocialCard from "./SocialCard";
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";

// const Link = require("react-router-dom").Link;

function Dashboard(props) {
    return (
        <Container fluid>
            <Row>
                <Col className="display-3 text-center py-5 goal-title">
                    Dashboard
                </Col>
            </Row>
            <Row>
                <ActivityCard
                    sport={"Run"}
                    units={["mi", "km", "minutes"]}
                    color={"#ed4b4b"}
                    img={Run}
                    user={props}
                    activity={props.runActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onDurationChange={props.onDurationChange}
                    onUnitChange={props.onUnitChange}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                />
                <ActivityCard
                    sport={"Ride"}
                    units={["mi", "km", "minutes"]}
                    color={"#4fc147"}
                    img={Bike}
                    user={props}
                    activity={props.rideActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onDurationChange={props.onDurationChange}
                    onUnitChange={props.onUnitChange}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                />
                <ActivityCard
                    sport={"Swim"}
                    units={["meters", "yards", "minutes"]}
                    color={"#4b68ed"}
                    img={Swim}
                    user={props}
                    activity={props.swimActivity}
                    onLogClick={props.onLogClick}
                    onDistanceChange={props.onDistanceChange}
                    onDurationChange={props.onDurationChange}
                    onUnitChange={props.onUnitChange}
                    handleClose={props.handleClose}
                    handleShow={props.handleShow}
                />
            </Row>
            <Row>
                <GoalsCard user={props.user} />
                <ChallengesCard user={props.user} />
                <BadgesCard user={props.user} />
            </Row>
            <Row>
                <SocialCard user={props.user} />
            </Row>
        </Container >

    )
}

export default Dashboard;
