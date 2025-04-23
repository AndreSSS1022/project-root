import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import LocalCard from './LocalCard';
import logo from '../assets/partyfinder-logo.png';
import vintrashImage from '../assets/vintrash.jpg';
import brewHouseImage from '../assets/brewhouse.jpg';
import felinaImage from '../assets/felina.jpg';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Home() {
  const locales = [
    { id: 1, nombre: 'VINTRASH', imagen: vintrashImage, rating: 3 },
    { id: 2, nombre: 'BREW HOUSE', imagen: brewHouseImage, rating: 4 },
    { id: 3, nombre: 'FELINA', imagen: felinaImage, rating: 5 },
  ];

  return (
    <Container className="py-4">
      {/* Sección de descripción del proyecto */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-white mb-4">Party Finder</h2>
          <Card bg="dark" text="white" className="mb-4">
            <Card.Body>
              <div className="text-center mb-4">
                <img src={logo} alt="Party Finder Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
              </div>
              <Card.Title className="text-center mb-4">Descubre las mejores fiestas</Card.Title>
              <Card.Text className="mb-4">
                Party Finder es una aplicación que te permite descubrir los mejores lugares para 
                salir de fiesta. Encuentra bares, discotecas y eventos, con opiniones reales de otros 
                usuarios, promociones exclusivas y la posibilidad de hacer reservas directamente desde la app.
              </Card.Text>
              
              <h4 className="mb-3">Características principales:</h4>
              <ul className="feature-list">
                <li>Descubre los mejores lugares para salir de fiesta</li>
                <li>Consulta precios, horarios y ubicaciones</li>
                <li>Aprovecha descuentos y promociones exclusivas</li>
                <li>Haz reservas directamente desde la app</li>
                <li>Lee y comparte opiniones sobre los establecimientos</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección de ranking de la semana */}
      <h3 className="text-white mb-4">RANKING DE LA SEMANA</h3>
      <Row className="mb-5">
        {locales.map(local => (
          <Col md={4} className="mb-4" key={local.id}>
            <LocalCard 
              nombre={local.nombre} 
              imagen={local.imagen} 
              rating={local.rating} 
            />
          </Col>
        ))}
      </Row>

      {/* Sección de comentarios */}
      <h3 className="text-white mb-4">COMENTARIOS RECIENTES</h3>
      <Row>
        <Col>
          <Card bg="secondary" text="white" className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <img 
                  src={vintrashImage} 
                  alt="Vintrash" 
                  className="me-3" 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} 
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h5>VINTRASH</h5>
                    <div className="d-flex align-items-center">
                      <span className="me-2">3.0</span>
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaRegStar className="text-secondary" />
                      <FaRegStar className="text-secondary" />
                    </div>
                  </div>
                  <Button variant="info" size="sm" className="mt-2">AGREGA TU COMENTARIO</Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card bg="secondary" text="white" className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <img 
                  src={vintrashImage} 
                  alt="Vintrash" 
                  className="me-3" 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} 
                />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h5>VINTRASH</h5>
                    <div className="d-flex align-items-center">
                      <span className="me-2">4.0</span>
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaRegStar className="text-secondary" />
                    </div>
                  </div>
                  <Button variant="info" size="sm" className="mt-2">AGREGA TU COMENTARIO</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
