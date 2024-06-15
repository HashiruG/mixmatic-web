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
            <Nav.Link href="#home">Recipes</Nav.Link>
            <Nav.Link href="#features">Add Recipe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarItem;