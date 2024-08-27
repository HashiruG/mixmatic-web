import Link from "next/link"
import styles from "./NavbarItem.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {signOut } from "next-auth/react";

const NavbarItem = () => {

  function handleClick()  {
    signOut({ callbackUrl: '/' })
  }
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className={styles.navs}>
        <Container>
          <Navbar.Brand href="/menu">Mixmatic Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" variant="underline">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/add-item">Add Recipes</Nav.Link>
            <Nav.Link href="/signup">Register Users</Nav.Link>
            <Nav.Link onClick={handleClick}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarItem;