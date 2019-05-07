import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../utils/API";
import ActivityCard from "../components/ActivityCard/ActivityCard.js";
import Run from "../components/images/run.png"
import Bike from "../components/images/bike.png"
import Swim from "../components/images/swim.png"
// import run from "../components/images"

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
            </Container >
        );
    }
}

export default Profile;
