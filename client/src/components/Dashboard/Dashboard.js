import React from "react";
//react-bootstrap
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
//Components
import ActivityCard from "./ActivityCard";
import BadgesCard from "./BadgesCard";
import ChallengesCard from "./ChallengesCard";
import GoalsCard from "./GoalsCard";
import SocialCard from "./SocialCard";
import Run from "../images/run.png";
import Bike from "../images/bike.png";
import Swim from "../images/swim.png";

const Link = require("react-router-dom").Link;

function Dashboard(props) {
    let fname = props.user.givenName.charAt(0).toUpperCase() + props.user.givenName.slice(1);
    return (
        <Container fluid>
            <Row>
                <Col className="display-3 text-center py-5 goal-title">
                    {fname}'s Dashboard
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
            <Button variant="primary" onClick={props.handleShow}>
                Launch demo modal
        </Button>

            <Modal show={props.state.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </Container >

    )
}

export default Dashboard;
