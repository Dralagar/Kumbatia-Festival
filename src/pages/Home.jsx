// Home.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import bannerImage from "../assets/unity-in-diversity.jpg";
import manhand from "../assets/manhand.jpg";
import "../Styles/Home.css";

// Header component
const Header = () => (
  <div className="header">
    <div className="text-content">
      <h1>Kumbatia Afrika Peace Festival</h1>
      <h2>Shared Humanity, Shared Prosperity</h2>
      <img src={bannerImage} alt="Banner" className="background-image" />
      <p>July 2024</p>
    </div>
  </div>
);

// Festival Overview component
const FestivalOverview = () => (
  <div className="overview">
    <div className="banner">
      <div className="text-content">
        <h1>Kumbatia Afrika Peace Festival</h1>
        <img src={manhand} alt="Festival Banner" className="background-image" />
      </div>
    </div>
    <h2>Festival Overview</h2>
    <p>
      Festivals are a powerful way to bring people together and celebrate
      diversity. Join us for the Kumbatia Afrika Peace Festival, an initiative
      by Youth Voices Community and African Grassroots Media Alliance.
    </p>
  </div>
);

// Welcome Message component
const WelcomeMessage = () => (
  <div className="welcome-message">
    <h2>Welcome Message</h2>
    <p>
      Welcome to the Kumbatia Afrika Peace Festival! We are excited to bring
      communities together through art, culture, and shared experiences.
    </p>
  </div>
);

// Call to Action component
const CallToAction = () => (
  <div className="call-to-action">
    <h2>Explore the Festival</h2>
    <p>
      Join us in celebrating diversity and fostering peaceful coexistence. Learn
      more about the festival and get involved!
    </p>
  </div>
);

// Upcoming Events component
const UpcomingEvents = () => (
  <div className="upcoming-events">
    <h2>Upcoming Events</h2>
    {/* Display a list of upcoming events with details */}
  </div>
);

// Main Home component
function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} className="mb-2 pt-3">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="mb-2 pt-3">
          <FestivalOverview />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="mb-2 pt-3">
          <WelcomeMessage />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="mb-2 pt-3">
          <CallToAction />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} className="mb-2 pt-3">
          <UpcomingEvents />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
