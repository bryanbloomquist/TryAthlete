import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Button, Modal } from "react-bootstrap";
//API
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
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
const Link = require("react-router-dom").Link;

class App extends Component {
  state = {
    user: {},
    badges: {},
    loggedIn: false,
    friends: [],
    runActivity: {
      sport: "Run",
      distance: 0,
      units: "mi",
      duration: 0
    },
    rideActivity: {
      sport: "Ride",
      distance: 0,
      units: "mi",
      duration: 0
    },
    swimActivity: {
      sport: "Swim",
      distance: 0,
      units: "meters",
      duration: 0
    },
    show: false,
    redirect: false
  }

  //constructor to handle the model functions
  constructor(props, context) {
    super(props, context);

    //models 
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  //redirect logic
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  //redirect location in redner method
  renderRedirect = () => {
    if (this.state.redirect) {
      this.setState({ redirect: false });
      return <Redirect to='/dashboard' />
    }
  }

  componentDidMount() {

    //load badges
    API.getBadges()
      .then(res => {
        this.setState({ badges: res.data });
        console.log(this.state.badges);
      })

    //check local storage
    let localStorageUser = JSON.parse(window.localStorage.getItem("user"))

    //process for if there is a user saved to the local storage
    if (localStorageUser !== null) {

      //get the most up-to-data user information
      API.getUser(localStorageUser._id)
        .then(res => {
          //set the user state to the API-called data
          this.setState({ user: res.data, loggedIn: true });

          //populate user friends list
          this.getUserFriends();
        })
    } else {
      console.log("no user")
    }
  }

  //friends function that populates after user loaded
  getUserFriends = () => {
    let getFriendsPromises = [];
    for (let i = 0; i < this.state.user.friends.length; i++) {
      console.log("Loading Friends List into State: ", this.state.user.friends[i]);
      getFriendsPromises.push(this.userNameLookup(this.state.user.friends[i]));
    }
    Promise.all(getFriendsPromises).then((values) => {
      console.log(values);
      console.log("got here");
      this.setState({
        friends: values
      });
    });
  }

  userNameLookup = (id) => {
    console.log("Friend ID Lookup: ", id);
    return API.getUser(id)
      .then(res => {
        console.log("Friend Name Lookup: ", res.data);
        let friendData = {
          id: res.data._id,
          givenName: res.data.givenName,
          familyName: res.data.familyName,
          imageUrl: res.data.imageUrl,
          email: res.data.email
        }
        return friendData;
      })
      .catch(err => console.log(err));
  };

  responseGoogleSuccess = (response) => {

    //if the user isn't already logged in from local storage
    if (this.state.loggedIn === false) {
      let loginUser = {
        "email": response.profileObj.email,
        "familyName": response.profileObj.familyName,
        "givenName": response.profileObj.givenName,
        "imageUrl": response.profileObj.imageUrl,
        "name": response.profileObj.name
      }
      this.validateUser(loginUser);
    }
  }

  validateUser = (loginUser) => {
    API
      .getUsers()
      .then((res) => {
        let userFound = false;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email === loginUser.email) {
            this.setState({ user: res.data[i], loggedIn: true });
            window.localStorage.setItem('user', JSON.stringify(res.data[i]));
            window.localStorage.setItem('loggedIn', true);
            userFound = true;
            this.setRedirect()
          }
        }
        if (!userFound) {
          console.log("creating new user!")
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
            .saveUser(userObject)
            .then((res) => {
              this.setState({ user: userObject, loggedIn: true });
              window.localStorage.setItem('user', JSON.stringify(userObject));
              window.localStorage.setItem('loggedIn', true);
              console.log("logged in = " + this.state.loggedIn);
              this.setRedirect()
            })
            .catch((err) => console.log((err)))
        }
        this.getUserFriends();
      })
  }

  responseGoogleFailure = (response) => {
    console.log(response);
  }

  logoutSession = () => {
    this.setState({ user: "", loggedIn: false });
    window.localStorage.clear();
  }

  //logic for activity card logging
  onLogClick = (event, sport) => {
    console.log(event)
    if (sport === "Run") {
      let activity = Object.assign({}, this.state.runActivity);

      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }));
      }
    }
    if (sport === "Ride") {
      let activity = Object.assign({}, this.state.rideActivity);
      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }));
      }
    }
    if (sport === "Swim") {
      let activity = Object.assign({}, this.state.swimActivity);
      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }));
      }
    }

  }

  onDistanceChange = (event) => {
    const { name, value } = event.target;
    console.log(value)

    if (name === "Run") {
      this.setState(prevState => ({
        runActivity: {
          ...prevState.runActivity,
          distance: value
        }
      }))
    }
    if (name === "Ride") {
      this.setState(prevState => ({
        rideActivity: {
          ...prevState.rideActivity,
          distance: value
        }
      }))
    }
    if (name === "Swim") {
      this.setState(prevState => ({
        swimActivity: {
          ...prevState.swimActivity,
          distance: value
        }
      }))
    }
  }

  onUnitChange = (event) => {
    const { name, value } = event.target;

    if (name === "Run") {
      this.setState(prevState => ({
        runActivity: {
          ...prevState.runActivity,
          units: value,
        }
      }))
    }
    if (name === "Ride") {
      this.setState(prevState => ({
        rideActivity: {
          ...prevState.rideActivity,
          units: value,
        }
      }))
    }
    if (name === "Swim") {
      this.setState(prevState => ({
        swimActivity: {
          ...prevState.swimActivity,
          units: value,
        }
      }))
    }
  }

  //NEW
  onDurationChange = (event) => {
    const { name, value } = event.target;

    if (name === "Run") {
      this.setState(prevState => ({
        runActivity: {
          ...prevState.runActivity,
          duration: value,
        }
      }))
    }
    if (name === "Ride") {
      this.setState(prevState => ({
        rideActivity: {
          ...prevState.rideActivity,
          duration: value,
        }
      }))
    }
    if (name === "Swim") {
      this.setState(prevState => ({
        swimActivity: {
          ...prevState.swimActivity,
          duration: value,
        }
      }))
    }
  }

  // delete our activity
  deleteActivity = id => {
    API.deleteActivity(this.state.user._id, id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log("is logged in: " + this.state.loggedIn);
    console.log()
    return (
      <Router>
        {this.state.loggedIn ? (
          <Wrapper>
            <NavbarArea>{this.state.user}</NavbarArea>
            <Switch>
              {this.renderRedirect()}
              <Route exact path="/" render={(props) => <Home {...props} user={this.state.user} />} />
              <Route exact path="/dashboard" render={(props) =>
                <Dashboard {...props} {...this.state}
                  user={this.state.user}
                  onLogClick={this.onLogClick}
                  onDistanceChange={this.onDistanceChange}
                  onUnitChange={this.onUnitChange}
                  onDurationChange={this.onDurationChange}
                  handleClose={this.handleClose}
                  handleShow={this.handleShow} />} />
              <Route exact path="/goals" render={(props) => <Goals {...props} user={this.state.user} />} />
              <Route exact path="/challenges" render={(props) => <Challenges {...props} user={this.state.user} />} />
              <Route exact path="/badges" render={(props) => <Badges {...props}
                user={this.state.user}
                badges={this.state.badges} />} />
              <Route exact path="/social" render={(props) => <Social {...props} user={this.state.user} friends={this.state.friends} />} />
              <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state.user} delete={this.deleteActivity} />} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Link to="/">
                  <Button
                    className="btn-lg btn-primary border-dark my-5"
                    onClick={this.logoutSession}
                  >
                    Logout
                  </Button>
                </Link>
              </Col>
            </Row>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Activity logged</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo! Keep it up!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
            </Button>
              </Modal.Footer>
            </Modal>
          </Wrapper>
        ) : (
            <Wrapper>
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} user={this.state.user} />} />
              </Switch>
              <Row className="justify-content-center">
                <Col xs="auto">
                  <GoogleLogin
                    clientId="907322878909-ceh0tltstqr7ht4eidho9ehj73bs7t1p.apps.googleusercontent.com"
                    render={renderProps => (
                      <Button
                        className="btn-lg btn-primary border-dark mt-5"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Login with Google
                      </Button>
                    )}
                    onSuccess={this.responseGoogleSuccess}
                    onFailure={this.responseGoogleFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </Col>
              </Row>

            </Wrapper>
          )}
      </Router>
    )
  }
}
export default App;
