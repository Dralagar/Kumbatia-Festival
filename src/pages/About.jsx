import React from "react";
import "../Styles/About.css";
import itImage from "../assets/Gitarart.jpg";
import utImage from "../assets/africanmendr.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="section-title mb-4 text-center">About Us</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="about-section">
            <h2 className="subsection-title mb-4">Our Story</h2>
            <div className="image-container">
              <img
                src={utImage}
                alt="Description for utImage"
                className="img-fluid mb-3"
              />
            </div>
            <p className="about-description">
              Overview: An in-depth explanation of the festival's mission,
              vision, and values. Mission and vision statement History of the
              festival Festival team / Governance of the Festival Partners and
              sponsors Background and Context: Information about the festival's
              origins, the involved organizations, and the societal context it
              aims to address. Vision, Mission, Values: Highlighted in a concise
              format. Objectives: Summarize the festival's key objectives.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-4">
          <div className="about-section">
            <h2 className="subsection-title mb-4">Our Mission</h2>
            <div className="image-container">
              <img
                src={itImage}
                alt="Description for itImage"
                className="img-fluid mb-3"
              />
            </div>
            <p className="about-description">
            To Serve as a dynamic platform where Africa's rich cultural diversity and artistic talent unite communities and become a force for peace and social integration.

            </p>
          </div>
          <div>

          </div>
          <div className="col-lg-6 col-md-12 mb-4">
          <div className="about-section">
            <h2 className="subsection-title mb-4">Values</h2>
            <div className="image-container">
              <img
                src={itImage}
                alt="Description for itImage"
                className="img-fluid mb-3"
              />
            </div>
            <p className="about-description">
            To Serve as a dynamic platform where Africa's rich cultural diversity and artistic talent unite communities and become a force for peace and social integration.

            </p>
          </div>
          <div>
            
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default About;
