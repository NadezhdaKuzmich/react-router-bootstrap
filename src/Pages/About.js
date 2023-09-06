import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import design from "../assets/design.png";
import programming from "../assets/programming.jpeg";
import frameworks from "../assets/frameworks.png";
import libraries from "../assets/libraries.png";
import team from "../assets/team.png";

function About() {
  return (
    <main>
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" bg="dark" className="flex-column mt-4">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Libraries</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Team</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} style={{ padding: "10px"}}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src={design}
                    className="d-block w-100"
                    alt="design"
                    style={{ paddingBottom: "10px" }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src={programming}
                    className="d-block w-100"
                    alt="programming"
                    style={{ paddingBottom: "10px" }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. Lorem Ipsum comes from
                    sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written
                    in 45 BC. This book is a treatise on the theory of ethics,
                    very popular during the Renaissance.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src={frameworks}
                    className="d-block w-100"
                    alt="frameworks"
                    style={{ paddingBottom: "10px" }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. Contrary to popular belief,
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the
                    more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src={libraries}
                    className="d-block w-100"
                    alt="libraries"
                    style={{ paddingBottom: "10px" }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.{" "}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src={team}
                    className="d-block w-100"
                    alt="team"
                    style={{ paddingBottom: "10px" }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </main>
  );
}

export default About;