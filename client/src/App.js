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
    friendSearch: "",
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
    redirect: false,
    modalBody: "Keep up the good work!",
    modalTitle: "Activity Logged"
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
    if (this.state.user.friends.length === 0) {
      console.log("getUserFriends - No")
    } else {

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
        // this.getUserFriends();
      }).then(
        this.getUserFriends()
      )
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
    this.setState({ modalBody: "Keep up the great work!" })
    console.log(event)
    let whichSport = ""
    switch (sport) {
      case "Run":
        whichSport = Object.assign({}, this.state.runActivity);
        break;
      case "Ride":
        whichSport = Object.assign({}, this.state.rideActivity);
        break;
      case "Swim":
        whichSport = Object.assign({}, this.state.swimActivity);
        break;
      default:
        whichSport = Object.assign({}, this.state);
    }
    if (parseFloat(whichSport.distance) === 0 || parseFloat(whichSport.duration) === 0) { alert("Please enter a value greater than 0") }
    else {
      this.handleShow();
      API.saveActivity(whichSport, this.state.user._id)
        .then(res => this.setState({ user: res.data }))
        .then((callback) => this.addActivities())
        .then((callback) => this.calcBadges());
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
    console.log(id)
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
        runDistance += parseFloat(value.distance)
        runDuration += parseFloat(value.duration)
      }
      if (value.sport === "Ride") {
        rideDistance += parseFloat(value.distance)
        rideDuration += parseFloat(value.duration)
      }
      if (value.sport === "Swim") {
        swimDistance += parseFloat(value.distance)
        swimDuration += parseFloat(value.duration)
      } else {
        return (console.log("not an activity"));
      }
    })
    this.determineGoalAchieved(runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration);
    this.determineChallengeAchieved(runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration);
  }

  determineGoalAchieved = (runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration) => {
    let goalsArray = this.state.user.goals;

    goalsArray.map((value, index) => {
      console.log(value)
      if (value.sport === "Run") {
        if (value.goalType === "Distance" && value.goalQty <= runDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a running distance goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.goalQty <= runDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a running duration goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Ride") {
        if (value.goalType === "Distance" && value.goalQty <= rideDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a riding distance goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.goalQty <= rideDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a riding duration goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Swim") {
        if (value.goalType === "Distance" && value.goalQty <= swimDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a swimming distance goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.goalType === "Time" && value.goalQty <= swimDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a swimming duration goal!" })
          API.updateGoal(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
    })
  }

  determineChallengeAchieved = (runDistance, runDuration, rideDistance, rideDuration, swimDistance, swimDuration) => {
    let challengesArray = this.state.user.challenges;

    challengesArray.map((value, index) => {
      console.log(value)
      if (value.sport === "Run") {
        if (value.challengeType === "Distance" && value.challengeQty <= runDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a running distance challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.challengeType === "Time" && value.challengeQty <= runDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a running duration challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Ride") {
        if (value.challengeType === "Distance" && value.challengeQty <= rideDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a riding distance challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.challengeType === "Time" && value.challengeQty <= rideDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a riding duration challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
      if (value.sport === "Swim") {
        if (value.challengeType === "Distance" && value.challengeQty <= swimDistance && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a swimming distance challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
        if (value.challengeType === "Time" && value.challengeQty <= swimDuration && value.isAchieved === false) {
          this.setState({ modalBody: "You achieved a swimming duration challenge!" })
          API.updateChallenge(true, this.state.user._id, value.id)
            .then(res => this.setState({ user: res.data }));
        }
      }
    })
  }

  onFriendSearchChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      friendSearch: value
    })

  }

  onFriendSearchSubmit = (event) => {
    API.getUsers()
      .then(res => {
        let searchUsers = res.data;
        let userNotFound = 0;
        searchUsers.forEach(searchUser => {
          if (searchUser.email === this.state.friendSearch) {
            let friendData = {
              friends: searchUser._id
            }
            let userData = {
              friends: this.state.user._id
            }
            // Add found friend to current user friend array
            API.addFriend(friendData, this.state.user._id)
              .then(
                console.log("Added " + searchUser.email + " to " + this.state.friendSearch + "'s friends list")
              )

            // Add current user to found friend array (mutually friends)
            API.addFriend(userData, searchUser._id)
              .then(
                console.log("Added " + this.state.friendSearch + "to " + searchUser.email + "'s friends list")
              )
            window.location.reload();
          }
          else {
            // No users found with this email
            userNotFound++
          }
          // The number of users not found in the conditional equals the number of users in the array
          // This means no users match friend search and they must not exist
          if (userNotFound === searchUsers.length) {
            this.setState({ modalBody: "User not found" })
            this.handleShow()
          }
        })
      })
  }

  onUnfriend = (friendID) => {
    API.deleteFriend(this.state.user._id, friendID)
      .then(window.location.reload())
      .catch(err => console.log(err));
  }

  // window.location.reload()



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
                  friends={this.state.friends}
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
                friends={this.state.friends}
                onFriendSearchChange={this.onFriendSearchChange}
                onFriendSearchSubmit={this.onFriendSearchSubmit}
                onUnfriend={this.onUnfriend} />} />
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
                <Modal.Title>{this.state.modalTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.modalBody}</Modal.Body>
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
