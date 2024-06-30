import Link from "next/link"
import styles from "./NavbarItem.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarItem = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className={styles.navs}>
        <Container>
          <Navbar.Brand href="/">Mixmatic Pro</Navbar.Brand>
          <Nav className="justify-content-end"  variant="underline">
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