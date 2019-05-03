import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../utils/API";

class Details extends Component {
    state = {
        user: {}
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
                            <h1>User Details</h1>
                            <h2>
                                {this.state.user.fname} {this.state.user.lname}
                            </h2>
                            <img src={this.state.user.avatar} className="text-center" alt="User Avatar"/>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center">User Detials Area</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;
