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
// import NoMatch from "./components/NoMatch/NoMatch";
import './App.css';

class App extends Component {
  state = {
    user: {
        id: 1,
        fname: "Scott",
        lname: "Anderson",
        userName: "wildside50",
        avatar: "https://media.licdn.com/dms/image/C5603AQG8RXuzxnp7Vg/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=8fzMGfAM1iGOsjDSm_FAUS-zD1ler13jAEzweHT_nvw"
    }
};

    // When this component mounts, grab the user with the _id of this.props.match.params.id
  //   componentDidMount() {
  //     API.getUser(this.props.match.params.id)
  //         .then(res => this.setState({ user: res.data }))
  //         .catch(err => console.log(err));
  // }
  render() {
    console.log(this.state)
    return (
      <Router>
        <Wrapper>
          <NavbarArea>{this.state.user}</NavbarArea>
          <Switch>
            <Route exact path="/"  render={(props) => <Home {...props} user={this.state}/>} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} user={this.state}/>} />
            <Route exact path="/goals"  render={(props) => <Goals {...props} user={this.state}/>} />
            <Route exact path="/challenges"  render={(props) => <Challenges {...props} user={this.state.user}/>} />
            <Route exact path="/badges"  render={(props) => <Badges {...props} user={this.state}/>} />
            <Route exact path="/social"  render={(props) => <Social {...props} user={this.state}/>} />
            <Route exact path="/profile"  render={(props) => <Profile {...props} user={this.state}/>} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    )
  }
}
export default App;
