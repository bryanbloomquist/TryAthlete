import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../images/logo.svg";
import Home from "../images/home2.png";
import LoginButton from "../GoogleLogin/GoogleLogin";
// import Login from "../images/login2.png"

function NavbarArea(props) {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img className="logo-small" src={Logo} alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item href="/goals">Goals</NavDropdown.Item>
                    <NavDropdown.Item href="/challenges">Challenges</NavDropdown.Item>
                    <NavDropdown.Item href="/badges">Badges</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/social">Social Feed</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline className="searchBar">
                <FormControl type="text" placeholder="Search for friends" className="mr-sm-2" />
                <Button className="searchButton" variant="outline-success">Search</Button>

            </Form>
            <Navbar.Brand href="/dashboard">
                <img className="avatar" src={props.children.avatar} alt="login"></img>
            </Navbar.Brand>

            {/* </Form>
                { props.user ? (
                    <Navbar.Brand href="/dashboard">
                        <img className="avatar" src={props.user.imageUrl} alt={props.user.name}></img>
                    </Navbar.Brand>
                ) : (
                    <LoginButton />
                )} */}

        </Navbar >
    );
}

export default NavbarArea;