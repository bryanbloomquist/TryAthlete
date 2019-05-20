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
import Calculations from "./components/Profile/calculateTotals";
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

  //REDIRECT LOGIC
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

    //LOADING BADGES
    API.getBadges()
      .then(res => {
        this.setState({ badges: res.data });
        console.log(this.state.badges);
      })

    //CHECK FOR USER IN LOCAL STORAGE
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
    console.log("user: " + this.state.user);
    console.log("logged in = " + this.state.loggedIn);
  }

  //ACTIVITY CARD LOGGING TO DB
  onLogClick = (event, sport) => {
    console.log(event)
    if (sport === "Run") {
      let activity = Object.assign({}, this.state.runActivity);
      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }))
          .then((callback) => this.addActivities())
          .then((callback) => this.calcBadges());
      }
    }
    if (sport === "Ride") {
      let activity = Object.assign({}, this.state.rideActivity);
      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }))
          .then((callback) => this.calcBadges());
      }
    }
    if (sport === "Swim") {
      let activity = Object.assign({}, this.state.swimActivity);
      if (parseFloat(activity.distance) === 0 || parseFloat(activity.duration) === 0) { alert("Please enter a value greater than 0") }
      else {
        this.handleShow();
        API.saveActivity(activity, this.state.user._id)
          .then(res => this.setState({ user: res.data }))
          .then((callback) => this.calcBadges());
      }
    }
  }

  //ON CHANGE EVENT HANDLERS FOR ACTIVITY CARD
  onDistanceChange = (event) => {
    const { name, value } = event.target;
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

  //DELETE AN ACTIVITY
  deleteActivity = (id) => {
    API.deleteActivity(this.state.user._id, id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  //GOAL ACCOMPLISHMENT TRACKING
  addActivities = () => {
    let activitiesArray = this.state.user.activities;
    let runDistance = 0;
    let runDuration = 0;
    let rideDistance = 0;
    let rideDuration = 0;
    let swimDistance = 0;
    let swimDuration = 0;

    activitiesArray.map((value, index) => {
      if (value.sport === "Run") {
        runDistance += parseInt(value.distance)
        runDuration += parseInt(value.duration)
      }
      if (value.sport === "Ride") {
        rideDistance += parseInt(value.distance)
        rideDuration += parseInt(value.duration)
      }
      if (value.sport === "Swim") {
        swimDistance += parseInt(value.distance)
        swimDuration += parseInt(value.duration)
      }
    })
    this.determineGoalAchieved(runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration);
  }

  determineGoalAchieved = (runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration) => {
    let goalsArray = this.state.user.goals;

    goalsArray.map((value, index) => {
      console.log(value)
      if (value.sport === "Run") {
        if (value.goalType === "Distance" && value.goalQty <= runDistance && value.isAchieved === false) {
          alert("You achieved a running distance goal!")
          console.log(value.id)
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.gaolQty <= runDuration && value.isAchieved === false) {
          alert("You achieved a running time goal!")
          API.updateGoal(true, this.state.user._id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Ride") {
        if (value.goalType === "Distance" && value.goalQty <= rideDistance && value.isAchieved === false) {
          alert("You achieved a biking distance goal!")
          API.updateGoal(true, this.state.user._id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.gaolQty <= rideDuration && value.isAchieved === false) {
          alert("You achieved a biking time goal!")
          API.updateGoal(true, this.state.user._id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Swim") {
        if (value.goalType === "Distance" && value.goalQty <= swimDistance && value.isAchieved === false) {
          alert("You achieved a swimming distance goal!")
          API.updateGoal(true, this.state.user._id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.gaolQty <= swimDuration && value.isAchieved === false) {
          alert("You achieved a swimming time goal!")
          API.updateGoal(true, this.state.user._id)
            .then(res => this.setState({ user: res.data }));
        }
      }
    })
  }
  // determine if a badge has been earned
  calcBadges = () => {
    let badgeEarned = [];
    let bikeTotal = Calculations.calcTotalBike(this.state.user.activities).toFixed(2);
    let runTotal = Calculations.calcTotalRun(this.state.user.activities).toFixed(2);
    let swimTotal = Calculations.calcTotalSwim(this.state.user.activities).toFixed(2);
    console.log("bikeTotal: " + bikeTotal + ", runTotal: " + runTotal + ", swimTotal: " + swimTotal);
    if (runTotal >= 26) { badgeEarned.push(1); };
    if (runTotal >= 277) { badgeEarned.push(2); };
    if (runTotal >= 1350) { badgeEarned.push(3); };
    if (runTotal >= 2680) { badgeEarned.push(4); };
    if (swimTotal >= 36960) { badgeEarned.push(5); };
    if (swimTotal >= 580800) { badgeEarned.push(6); };
    if (swimTotal >= 4132480) { badgeEarned.push(7); };
    if (swimTotal >= 7272320) { badgeEarned.push(8); };
    if (bikeTotal >= 1467) { badgeEarned.push(9); };
    if (bikeTotal >= 2170) { badgeEarned.push(10); };
    if (bikeTotal >= 2200) { badgeEarned.push(11); };
    if (bikeTotal >= 13170) { badgeEarned.push(12); };
    console.log("badgeID earned: " + badgeEarned);
    API.saveBadge(badgeEarned, this.state.user._id)
      .then((res) => {
        this.setState({ user: res.data })
      })
  }
  
  render() {
    console.log("is logged in: " + this.state.loggedIn);
    console.log("state of the user:");
    console.log(this.state.user);
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
              <Route exact path="/challenges" render={(props) => <Challenges {...props} 
                user={this.state.user}
                friends={this.state.friends} />} />
              <Route exact path="/badges" render={(props) => <Badges {...props}
                user={this.state.user}
                badges={this.state.badges} />} />
              <Route exact path="/social" render={(props) => <Social {...props} 
                user={this.state.user}
                friends={this.state.friends} />} />
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
                    render={renderProps => {
                      return (<Button className="btn-lg btn-primary border-dark mt-5" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Login with Google
                      </Button>);
                    }}
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
