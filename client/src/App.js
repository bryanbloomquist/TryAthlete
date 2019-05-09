import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//API
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Goals from "./pages/Goals";
import Challenges from "./pages/Challenges";
import Badges from "./pages/Badges";
import NoMatch from "./pages/NoMatch";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id/dashboard" component={Dashboard} />
            <Route exact path="/user/:id/goals" component={Goals} />
            <Route exact path="/user" component={Dashboard} />
            <Route exact path="/user/:id/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    )
  }
}
export default App;
