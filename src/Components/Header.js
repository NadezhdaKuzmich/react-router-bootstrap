import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
          style={{ padding: "12px 0" }}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                height="30"
                weight="30"
                alt="logo"
                className="d-inline-block align-top"
              />
              ReactFox
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav d-flex"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  {" "}
                  About us{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  {" "}
                  Contacts{" "}
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  {" "}
                  Blog{" "}
                </Nav.Link>
              </Nav>
              <Form className="d-flex" style={{ gap: "10px" }}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;