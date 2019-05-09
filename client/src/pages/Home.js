import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
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

    logIn() {
        window.location.assign('/user/');
    }

    render() {

        const responseGoogle = ( response ) => {
            console.log( response );
            console.log( response.hg.id_token );
        }

        const logout = ( response ) => {
            console.log( response );
        }

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
                            buttonText = "Google Login"
                            onSuccess = { responseGoogle }
                            onFailure = { responseGoogle }
                        />
                    </Col>
                    <Col>
                        <GoogleLogout 
                            buttonText = "Logout"
                            onLogoutSuccess = { logout }
                        >
                        </GoogleLogout>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;
