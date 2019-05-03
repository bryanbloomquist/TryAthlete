import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/user" component={Profile} />
          <Route exact path="/user/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App;
