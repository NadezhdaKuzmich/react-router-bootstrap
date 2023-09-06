import { Container, NavLink } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-bg mt-4 p-3">
      <Container
      className="d-flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
            <p className="mb-0">©2023</p>
            <NavLink href="/">Privacy Policy</NavLink>
      </Container>
    </footer>
  );
}