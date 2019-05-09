import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../utils/API";

class Details extends Component {
    state = {
        user: {}
    };

    responseGoogleSuccess = ( response ) => {
        console.log( response );
        let user = {
            "email": response.profileObj.email,
            "familyName": response.profileObj.familyName,
            "givenName": response.profileObj.givenName,
            "googleId": response.googleId,
            "imageUrl": response.profileObj.imageUrl,
            "name": response.profileObj.name
        }
        console.log( user );
        window.location.assign( "/user/:id/dashboard")
    }

    responseGoogleFailure = ( response ) => {
        console.log( response );
    }

    // When this component mounts, grab the user with the _id of this.props.match.params.id
    componentDidMount() {
        API.getUser(this.props.match.params.id)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err));
    }

    logIn() {
        window.location.assign('/user/');
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>APP HOME/LANDING PAGE</h1>
                            <h2>
                                Login / Register Here - Cool Video looping?
                            </h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center">Home Page Info Here</h2>
                        {/* <button className="btn btn-success" onClick={() => this.logIn()}>Login</button> */}
                        <GoogleLogin
                            clientId = "907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
                            buttonText = "Login"
                            onSuccess = { this.responseGoogleSuccess }
                            onFailure = { this.responseGoogleFailure }
                            cookiePolicy = { "single_host_origin" }
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;
