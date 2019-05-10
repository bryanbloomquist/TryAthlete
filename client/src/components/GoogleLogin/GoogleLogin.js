import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class LoginButton extends Component {
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
  }

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