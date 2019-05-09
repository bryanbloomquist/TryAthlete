import React, { Component } from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
//Components
import ActivityCard from "../components/ActivityCard/ActivityCard.js";
import BadgesCard from "../components/BadgesCard/BadgesCard.js";
import ChallengesCard from "../components/ChallengesCard/ChallengesCard.js";
import GoalsCard from "../components/GoalsCard/GoalsCard.js";
import SocialCard from "../components/SocialCard/SocialCard.js";
import Run from "../components/images/run.png";
import Bike from "../components/images/bike.png";
import Swim from "../components/images/swim.png";

class Profile extends Component {
    logOut() {
        window.location.assign('/');
      }


    render() {
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
                    <GoalsCard />
                    <ChallengesCard />
                    <BadgesCard />
                </Row>
                <Row>
                    <SocialCard />
                </Row>
                <button className="btn btn-danger" onClick={() => this.logOut()}>Logout</button>
            </Container >

        );
    }
}

export default Profile;
