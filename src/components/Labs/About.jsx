import React from "react";
import { Accordion } from "react-bootstrap";

export default function About() {
  return (
    <div className="container py-4">
      <h3>About Orchids App</h3>
      <Accordion defaultActiveKey="0" className="mt-3">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is this app?</Accordion.Header>
          <Accordion.Body>
            A simple React app for FER202 labs, using React Router &
            React-Bootstrap.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What libraries are used?</Accordion.Header>
          <Accordion.Body>
            React, react-router, react-bootstrap, and Bootstrap CSS.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Where is data from?</Accordion.Header>
          <Accordion.Body>
            From ListOfOrchids.js (images via URLs).
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
