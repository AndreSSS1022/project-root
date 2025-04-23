import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaHeart, FaUser, FaEnvelope, FaBell } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/" className="footer-icon">
              <FaHome size={24} />
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="/favoritos" className="footer-icon">
              <FaHeart size={24} />
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="/perfil" className="footer-icon">
              <FaUser size={24} />
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="/mensajes" className="footer-icon">
              <FaEnvelope size={24} />
            </Link>
          </Col>
          <Col xs="auto">
            <Link to="/notificaciones" className="footer-icon">
              <FaBell size={24} />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
