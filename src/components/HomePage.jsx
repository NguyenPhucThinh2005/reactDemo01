import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router";

export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
