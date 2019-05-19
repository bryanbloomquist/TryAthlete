import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import Link from "react-router-dom/Link";
import Logo from "../images/logo.svg";
const Link = require("react-router-dom").Link;
// import Home from "../images/home2.png";
// import Login from "../images/login2.png"

const style = {
    display: "block",
    color: "black",
    padding: "10px"
}

function NavbarArea(props) {
    return (
        <Navbar expand="md">
            <Navbar.Brand href="/">
                <img className="logo-small" src={Logo} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Menu">
                        <Link style={style} to="/dashboard">Dashboard</Link>
                        <Link style={style} to="/goals">Goals</Link>
                        <Link style={style} to="/challenges">Challenges</Link>
                        <Link style={style} to="/badges">Badges</Link>
                        <Link style={style} to="/social">Friends</Link>
                    </NavDropdown>
                </Nav>
                <Form inline className="searchBar">
                    <FormControl type="text" placeholder="Search for friends" className="mr-sm-2" />
                    <Button className="searchButton" variant="outline-success">Search</Button>
                </Form>
                <Link to="/profile"><Navbar.Brand>
                    <img className="avatar" src={props.children.imageUrl} alt={props.children.givenName}></img>
                </Navbar.Brand></Link>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavbarArea;