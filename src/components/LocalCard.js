import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';

function LocalCard({ nombre, imagen, rating }) {
  // Crear las estrellas para el rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-warning" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-secondary" />);
    }
  }

  return (
    <Card className="local-card h-100 bg-dark text-white">
      <Card.Img variant="top" src={imagen} alt={nombre} className="local-image" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <div className="d-flex align-items-center my-2">
          {stars}
          <span className="ms-2">{rating}.0</span>
        </div>
        <Button variant="info" className="w-100 mt-2">AGREGA TU COMENTARIO</Button>
      </Card.Body>
    </Card>
  );
}

export default LocalCard;