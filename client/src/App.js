import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import NavbarArea from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <NavbarArea />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/user/:id" component={Details} />
          <Route exact path="/user/:id/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App;
