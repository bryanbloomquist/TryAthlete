import React from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
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

function Dashboard(props) {
    console.log(props)
    return (
        <Container fluid>
            <Row>
                <ActivityCard
                    activity={"Run"}
                    units={["mi", "km"]}
                    color={"#ed4b4b"}
                    img={Run}
                    user={props}
                />
                <ActivityCard
                    activity={"Ride"}
                    units={["mi", "km"]}
                    color={"#4fc147"}
                    img={Bike}
                    user={props}
                />
                <ActivityCard
                    activity={"Swim"}
                    units={["meters", "yards"]}
                    color={"#4b68ed"}
                    img={Swim}
                    user={props}
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
