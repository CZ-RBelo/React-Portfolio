import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import "../NavigationBar/NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar sticky="top" id="navBar" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav id="navBar" className="justify-content-center">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/About">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Skills">
            <Nav.Link>Key Skills</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Projects">
            <Nav.Link>Project Gallery</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;