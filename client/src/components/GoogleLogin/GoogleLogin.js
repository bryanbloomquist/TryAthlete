import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import API from "../../utils/API";

class LoginButton extends Component {
  state = {
    user: {}
  };

  responseGoogleSuccess = ( response ) => {
    console.log( response );
    let loginUser = {
      "email": response.profileObj.email,
      "familyName": response.profileObj.familyName,
      "givenName": response.profileObj.givenName,
      "googleId": response.googleId,
      "imageUrl": response.profileObj.imageUrl,
      "name": response.profileObj.name
    }
    console.log( loginUser );
    this.setState({ user: loginUser, hasUser: true })
    console.log( this.state.user );
    console.log( this.state.hasUser );
    // CALL FUNCTION HERE TO CHECK DATABASE FOR USER
    this.validateUser( loginUser );
  }

  // ADD FUNCTION THAT WILL SEARCH DATABASE FOR GOOGLE ID
  validateUser = ( data ) => {

  }
  // IF NONE ARE FOUND ADD THAT USER TO THE DATABASE
  // IF MATCH, SET USER TO THAT DATA

  responseGoogleFailure = ( response ) => {
    console.log( response );
  }

  render() {
    return (
      <GoogleLogin
        clientId = "907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
        buttonText = "Login"
        onSuccess = { this.responseGoogleSuccess }
        onFailure = { this.responseGoogleFailure }
        cookiePolicy = { "single_host_origin" }
      />
    );
  }
}

export default LoginButton;