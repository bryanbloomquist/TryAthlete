import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link"
import Logo from "../images/logo.svg";
import Home from "../images/home2.png";
// import Login from "../images/login2.png"

const style = {
    display: "block",
    color: "black",
    padding: "10px"
}




function NavbarArea(props) {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img className="logo-small" src={Logo} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <Link style={style} to="/dashboard">dashboard</Link>
                    <Link style={style} to="/goals">goals</Link>
                    <Link style={style} to="/challenges">Challenges</Link>
                    <Link style={style} to="/badges">Badges</Link> 
                    <NavDropdown.Divider />
                    <Link style={style} to="/social">Social Feed</Link>
                </NavDropdown>
            </Nav>
            <Form inline className="searchBar">
                <FormControl type="text" placeholder="Search for friends" className="mr-sm-2" />
                <Button className="searchButton" variant="outline-success">Search</Button>
            </Form>
            <Navbar.Brand href="/dashboard">
                <img className="avatar" src={props.children.avatar} alt="login"></img>
            </Navbar.Brand>
        </Navbar >
    );
}

export default NavbarArea;