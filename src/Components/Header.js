import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../assets/logo.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

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
            <Navbar.Brand href="/">
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
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
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

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contacts" element={<Contacts />} />
          <Route exact path="blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;