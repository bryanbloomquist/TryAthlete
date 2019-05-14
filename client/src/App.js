import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//API
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Goals from "./components/Goals/Goals";
import Challenges from "./components/Challenges/Challenges";
import Badges from "./components/Badges/Badges";
import Social from "./components/Social/Social";
import { GoogleLogin } from "react-google-login";
// import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';
import { runInContext } from 'vm';

class App extends Component {
  state = {
    user: {},
    loggedIn: false
  }

  responseGoogleSuccess = ( response ) => {
    console.log( response );
    let loginUser = {
      "email": response.profileObj.email,
      "familyName": response.profileObj.familyName,
      "givenName": response.profileObj.givenName,
      "imageUrl": response.profileObj.imageUrl,
      "name": response.profileObj.name
    }
    console.log( loginUser );
    console.log( this.state.user );
    console.log( this.state.loggedIn );
    this.validateUser( loginUser );
  }

  validateUser = ( loginUser ) => {
    API
      .getUsers()
      .then(( res ) => {
        let userFound = false;
        for( let i = 0; i < res.data.length; i++ ) {
          if ( res.data[i].email === loginUser.email ) {
            this.setState({ user: res.data[i], loggedIn: true });
            userFound = true;
          }
        }
        if ( !userFound ) {
          console.log( "creating new user!")
          let userObject = {
            givenName: loginUser.givenName,
            familyName: loginUser.familyName,
            imageUrl: loginUser.imageUrl,
            email: loginUser.email,
            activities: [],
            goals: [],
            badges: [],
            challenges: [],
            friends: []
          }
          API
            .saveUser( userObject )
            .then(( res ) => {
              console.log( res );
              this.setState({ user: userObject, loggedIn: true })
              console.log( this.state.user );
              console.log( "logged in = " + this.state.loggedIn );
            })
            .catch(( err ) => console.log(( err )))
        }
      })
  }

  responseGoogleFailure = ( response ) => {
    console.log( response );
  }

  // componentDidMount() {
  //
  // }

  render() {
    console.log( "is logged in: " + this.state.loggedIn );
    return (
      <Router>
        {this.state.loggedIn ? (
          <Wrapper>
            <NavbarArea>{ this.state.user }</NavbarArea>
            <Switch>
              <Route exact path="/" render={(props) => <Home { ...props } user = { this.state.user } />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard { ...props } user = { this.state.user } />} />
              <Route exact path="/goals" render={(props) => <Goals { ...props } user = { this.state.user } />} />
              <Route exact path="/challenges" render={(props) => <Challenges { ...props } user = { this.state.user } />} />
              <Route exact path="/badges" render={(props) => <Badges { ...props } user = { this.state.user } />} />
              <Route exact path="/social" render={(props) => <Social { ...props } user = { this.state.user } />} />
              <Route exact path="/profile" render={(props) => <Profile { ...props } user = { this.state.user } />} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Footer />
          </Wrapper>
        ) : (
          <Wrapper>
            <GoogleLogin
              clientId = "907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
              buttonText = "Login"
              onSuccess = { this.responseGoogleSuccess }
              onFailure = { this.responseGoogleFailure }
              cookiePolicy = { "single_host_origin" }
              className = "loginButton"
            />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} user={ this.state.user } />} />
            </Switch>
          </Wrapper>
        )}
      </Router>
    )
  }
}
export default App;
