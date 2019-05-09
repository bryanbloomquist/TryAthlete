import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import API from "../utils/API";
import config from "../config.json";

class Details extends Component {
    constructor() {
        super();
        this.state = { 
            isAuthenticated: false, 
            user: null, 
            token: "" };
    }
    
    state = {
        user: {}
    };

    logout = () => {
        this.setState({
            isAuthenticated: false,
            token: "",
            user: null
        })
    };

    googleResponse = ( response ) => {
        const tokenBlob = new Blob([ JSON.stringify({ access_token: response.accessToken }, null, 2 )], { type : "application/json"});
        const options = {
            method: "POST",
            body: tokenBlob,
            mode: "cors",
            cache: "default"
        };
        fetch( "http://localhost:3000/api/v1/auth/google", options ).then(( r ) => {
            const token = r.headers.get( "x-auth-token" );
            r.json().then(( user ) => {
                if ( token ) {
                    this.setState({ isAuthenticated: true, user, token })
                }
            });
        })
        console.log ( response );
    };

    onFailure = ( error ) => { alert( error )};

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

        let content = !!this.state.isAuthenticated ? 
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        { this.state.user.email }
                    </div>
                    <div>
                        <button 
                            onClick = { this.logout }
                            className = "button"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <GoogleLogin
                    clientId = "907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
                    buttonText = "Google Login"
                    onSuccess = { this.googleResponse }
                    onFailure = { this.onFailure }
                />
            );

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
                        { content }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Details;
