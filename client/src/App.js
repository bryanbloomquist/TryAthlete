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
    user: {}
  }

  
  // When this component mounts, grab the user with the _id of this.props.match.params.id
  //   componentDidMount() {
  //     API.getUser(this.props.match.params.id)
  //         .then(res => this.setState({ user: res.data }))
  //         .catch(err => console.log(err));
  // }

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
    const user=this.state.ashlen;
    return (
      <Router>
        <Wrapper>

            <NavbarArea>
              <GoogleLogin
                clientId = "907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
                buttonText = "Login"
                onSuccess = { this.responseGoogleSuccess }
                onFailure = { this.responseGoogleFailure }
                cookiePolicy = { "single_host_origin" }
              />
              {user}
            </NavbarArea>
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
      </Router>
    )
  }
}
export default App;
