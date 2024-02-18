import React from "react";
import "../Styles/About.css";
import itImage from "../assets/Gitarart.jpg";
import utImage from "../assets/africanmendr.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="about-section">
            <h2 className="mb-4">Our Story</h2>
            <img
              src={utImage}
              alt="Description for utImage"
              className="img-fluid mb-3"
            />
            <p>
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

        <div className="col-lg-6 col-md-12">
          <div className="about-section">
            <h2 className="mb-4">Our Mission</h2>
            <img
              src={itImage}
              alt="Description for itImage"
              className="img-fluid mb-3"
            />
            <p>
              Fusce euismod ligula nec erat tincidunt, vitae cursus mauris
              hendrerit. Nunc sit amet laoreet est. Nam eget magna vel orci
              bibendum efficitur eu vitae leo. Sed vel turpis nec elit congue
              malesuada ac sit amet elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
