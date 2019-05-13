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
    // CALL FUNCTION HERE TO CHECK DATABASE FOR USER
    this.validateUser( loginUser );
  }

  // ADD FUNCTION THAT WILL SEARCH DATABASE FOR GOOGLE ID
  validateUser = ( loginUser ) => {
    API
      .getUsers()
      .then(( res ) => {
        res.data.forEach(( user ) => {
          if ( user.email === loginUser.email ) {
            this.setState({ user: user, loggedIn: true })
            console.log( this.state.user );
            console.log( "loggedIn: " + this.state.loggedIn )
          }
        })
        if ( !this.state.loggedin ) {
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
            })
            .catch(( err ) => console.log(( err )))
        }
      })
  }
  // IF NONE ARE FOUND ADD THAT USER TO THE DATABASE
  // IF MATCH, SET USER TO THAT DATA

  responseGoogleFailure = ( response ) => {
    console.log( response );
  }

  // componentDidMount() {
  //   this.loadUser();
  // }

  // // When this component mounts, grab the user with the _id of this.props.match.params.id
  // loadUser = () => {
  //   //set the string here to whatever the id of the user in your db is! Use compass or ROBO 3t to see the id
  //   API.getUser("5cd733befb3d1a29ac976a8f")
  //     .then(res => {
  //       this.setState({ user: res.data, hasUser: true })
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    let user = this.state.user;
    console.log( user );
    return (
      <Router>
        {this.state.loggedIn ? (
          <Wrapper>
            <NavbarArea>{user}</NavbarArea>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={user} />} />
              <Route exact path="/goals" render={(props) => <Goals {...props} user={user} />} />
              <Route exact path="/challenges" render={(props) => <Challenges {...props} user={user} />} />
              <Route exact path="/badges" render={(props) => <Badges {...props} user={user} />} />
              <Route exact path="/social" render={(props) => <Social {...props} user={user} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
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
              <Route exact path="/" render={(props) => <Home {...props} user={user} />} />
            </Switch>
          </Wrapper>
        )}
      </Router>
    )
  }
}
export default App;
