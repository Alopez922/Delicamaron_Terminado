import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => (

  <footer className="bg-dark py-3">
    <Container>
      <p className="text-center text-white">
        &copy; {new Date().getFullYear()} Delicamaron. Todos los derechos reservados.
      </p>
    </Container>
  </footer>
);

export default Footer;