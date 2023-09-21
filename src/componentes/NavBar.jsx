import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand as={Link} to="/">Ecommerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/category/viento">Viento</Nav.Link>
      <Nav.Link as={Link} to="/category/percusion">Percusión</Nav.Link>
      <Nav.Link as={Link} to="/category/cuerdas">Cuerdas</Nav.Link>
    </Nav>
    <CartWidget />
  </Container>
</Navbar>

);