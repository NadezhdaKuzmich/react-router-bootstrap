import { Button, Container, Form } from "react-bootstrap";

function Contacts() {
  return (
    <main>
      <Container style={{ maxWidth: "600px" }} className="pt-5">
        <h1 className="text-center mb-2">Contact us</h1>
        <Form>
          <Form.Group className="mb-1" controlId="FormBasicEmail">
            <Form.Label style={{ fontSize: "18px" }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text style={{ fontSize: "12px", color: "#015cd9" }}>
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormBasicTextarea">
            <Form.Label style={{ fontSize: "18px" }}>
              Example textarea
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormBasicCheckbox">
            <Form.Check type="switch" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
}

export default Contacts;