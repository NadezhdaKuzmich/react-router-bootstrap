import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import jsimg from "../assets/jsimg.jpg";

function Blog() {
  return (
    <main>
      <Container>
        <Row className="mt-4">
          <Col md="9">
            <Card className="mb-3">
              <Row className="justify-content-center p-2">
                <Col xs={3} md={3}>
                  <Image src={jsimg} fluid thumbnail />
                </Col>
                <Col xs={9} md={9}>
                  <h3>Post</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="justify-content-center p-2">
                <Col xs={3} md={3}>
                  <Image src={jsimg} fluid thumbnail />
                </Col>
                <Col xs={9} md={9}>
                  <h3>Post</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="justify-content-center p-2">
                <Col xs={3} md={3}>
                  <Image src={jsimg} fluid thumbnail />
                </Col>
                <Col xs={9} md={9}>
                  <h3>Post</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="justify-content-center p-2">
                <Col xs={3} md={3}>
                  <Image src={jsimg} fluid thumbnail />
                </Col>
                <Col xs={9} md={9}>
                  <h3>Post</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="mb-3">
              <Row className="justify-content-center p-2">
                <Col xs={3} md={3}>
                  <Image src={jsimg} fluid thumbnail />
                </Col>
                <Col xs={9} md={9}>
                  <h3>Post</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={3}>
            <h5 className="text-center">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Angular</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Blog;