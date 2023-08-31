import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/category/viento">Viento</Nav.Link>
      <Nav.Link href="/category/percusion">Percusión</Nav.Link>
      <Nav.Link href="/category/cuerdas">Cuerdas</Nav.Link>
    </Nav>
    <CartWidget />
  </Container>
</Navbar>

);