import React, { Component } from "react";
//react-bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
//API
import API from "../utils/API";
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
    state = {
        user: {},
        // activity: ["Run", "Bike Ride", "Swim"],
        // rbunits: ["mi", "km"],
        // sunits: ["meter", "yard"],
        // color: ["#ed4b4b", "#4fc147", "#4b68ed"]
    };
    // When this component mounts, grab the user with the _id of this.props.match.params.id
    componentDidMount() {
        API.getUser(this.props.match.params.id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err));
    }

    logOut() {
        window.location.assign('/');
      }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Profile</h1>
                            <h2>

                                {this.state.user.fname} {this.state.user.lname}
                            </h2>
                            <img src={this.state.user.avatar} className="text-center" alt="User Avatar" />
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <h1 className="text-center">User Profile Area</h1>
                </Row>
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
