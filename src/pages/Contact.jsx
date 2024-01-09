import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <Container className="contact-section">
      <Row>
        <Col md={6}>
          <h2>Contact Information</h2>
          <p>Email: info@kumbatiapfestival.com</p>
          <p>Phone: +123 456 789</p>
          {/* Additional contact information can be added */}
        </Col>
        <Col md={6}>
          <h2>Contact Form</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="social-media-section">
        <Col>
          <h2>Social Media Links</h2>
          <div className="social-links">
            {/* Add social media icons and links */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Blog/News Section</h2>
          <p>Stay tuned for the latest updates and festival news!</p>
          {/* Add blog/news content and updates */}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
