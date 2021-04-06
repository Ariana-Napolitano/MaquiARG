import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ReactNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">MaquiARG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline">Buscar</Button>
          </Form>
          <a href="http://localhost:3000/carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </Navbar.Collapse>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="/marcas">Marcas</Nav.Link>
            <Nav.Link href="/maquillaje">Maquillaje</Nav.Link>
            <Nav.Link href="/skincare">Skin Care</Nav.Link>
            <Nav.Link href="/herramientas">Herramientas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default ReactNavbar;
