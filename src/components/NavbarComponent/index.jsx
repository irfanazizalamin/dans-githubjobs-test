import React from "react";
import './style.css'
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><strong>GitHub</strong> Jobs</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
