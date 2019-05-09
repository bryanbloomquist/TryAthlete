import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../images/logo2.png"
import Home from "../images/home2.png"
import Login from "../images/login2.png"

function NavbarArea(props) {
    console.log(props.children)
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={Logo} alt="logo"></img>
                {` `}
                <img src={Home} alt="home"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <NavDropdown title="Navigation" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/user">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/user/goals">Goals</NavDropdown.Item>
                    <NavDropdown.Item href="/user/challenges">Challenges</NavDropdown.Item>
                    <NavDropdown.Item href="/user/badges">Badges</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/user/social">Social Feed</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline className="searchBar">
                <FormControl type="text" placeholder="Search for friends" className="mr-sm-2" />
                <Button className="searchButton" variant="outline-success">Search</Button>
            </Form>
            <Navbar.Brand href="/user">
                <img className="avatar" src={props.children.avatar} alt="login"></img>
            </Navbar.Brand>
        </Navbar >

    );
}

export default NavbarArea;