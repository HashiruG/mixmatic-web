import Link from "next/link"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarItem = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mixmatic Pro</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Item>
          <Link className="nav-link" href="/">Recipes</Link>
          </Nav.Item>
          <Nav.Item>
          <Link className="nav-link" href="/add-item">Add Recipes</Link>
          </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarItem;