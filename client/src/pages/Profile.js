import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../utils/API";
import RunCard from "../components/ActivityCards/RunCard/RunCard.js";
import BikeCard from "../components/ActivityCards/BikeCard/BikeCard.js";
import SwimCard from "../components/ActivityCards/SwimCard/SwimCard.js";

class Profile extends Component {
    state = {
        user: {},
        activity: ["run", "swim", "bike"]
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
                    <RunCard>{this.state.activity[0]}</RunCard>
                    try setstate
                    <BikeCard></BikeCard>
                    <SwimCard></SwimCard>
                </Row>
            </Container >
        );
    }
}

export default Profile;
