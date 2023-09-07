import React from "react";
import { Link } from "react-router-dom";
import { Container, NavLink } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-bg mt-4 p-4">
      <Container
        className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <p className="mb-0">©2023</p>
        <NavLink as={Link} to="/">
          Privacy Policy
        </NavLink>
      </Container>
    </footer>
  );
}