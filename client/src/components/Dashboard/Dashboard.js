import React from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//Components
import ActivityCard from "../ActivityCard/ActivityCard.js";
import BadgesCard from "../BadgesCard/BadgesCard.js";
import ChallengesCard from "../ChallengesCard/ChallengesCard.js";
import GoalsCard from "../GoalsCard/GoalsCard.js";
import SocialCard from "../SocialCard/SocialCard.js";
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
                />
                <ActivityCard
                    activity={"Ride"}
                    units={["mi", "km"]}
                    color={"#4fc147"}
                    img={Bike}
                />
                <ActivityCard
                    activity={"Swim"}
                    units={["meters", "yards"]}
                    color={"#4b68ed"}
                    img={Swim}
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
