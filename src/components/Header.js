import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/partyfinder-logo.png'; // Asegúrate de tener esta imagen en la carpeta assets

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            alt="Party Finder Logo" 
            height="30" 
            className="d-inline-block align-top me-2" 
          />
          Party Finder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/locales">Locales</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
            <Nav.Link as={Link} to="/perfil">Mi Perfil</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
