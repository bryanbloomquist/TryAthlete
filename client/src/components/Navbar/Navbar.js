import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../images/logo.svg";
const Link = require("react-router-dom").Link;

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
                    <Link style={style} to="/dashboard">Dashboard</Link>
                    <Link style={style} to="/goals">Goals</Link>
                    <Link style={style} to="/challenges">Challenges</Link>
                    <Link style={style} to="/badges">Badges</Link>
                    <Link style={style} to="/social">Social</Link>
                </Nav>
            </Navbar.Collapse>
            <Link to="/profile"><Navbar.Brand>
                <img className="avatar" src={props.children.imageUrl} alt={props.children.givenName}></img>
            </Navbar.Brand></Link>
        </Navbar >
    );
}

export default NavbarArea;