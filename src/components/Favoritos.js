import React from 'react';
import { Container } from 'react-bootstrap';

function Favoritos() {
  return (
    <Container className="py-4">
      <h2 className="text-white mb-4">Favoritos</h2>
      <p className="text-white">
        Tus lugares favoritos aparecerán aquí.
      </p>
    </Container>
  );
}

export default Favoritos;