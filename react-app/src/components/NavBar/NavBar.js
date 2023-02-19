import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../NavBar/NavBar.css";

function NavBar(props) {
  return (
    <Navbar sticky="top" id="navBar" expand="lg" variant="dark">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav id="navBar" className="justify-content-center">
            <Nav.Link id="navBar" onClick={() => props.handlePageChange("Home")}>Home</Nav.Link>
            <Nav.Link id="navBar" onClick={() => props.handlePageChange("About")}>About</Nav.Link>            
            <Nav.Link id="navBar" onClick={() => props.handlePageChange("Skills")}>Key Skills</Nav.Link>
            <Nav.Link id="navBar" onClick={() => props.handlePageChange("Projects")}>Latest Projects</Nav.Link>
            <Nav.Link id="navBar" onClick={() => props.handlePageChange("Contact")}>Contact</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

// className="me-auto" 