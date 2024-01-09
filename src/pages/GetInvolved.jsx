import React from "react";
import "../Styles/GetInvolved.css";

function GetInvolved() {
  const volunteerOpportunities = [
    {
      id: 1,
      role: "Event Coordinator",
      description: "Coordinate and manage various aspects of festival events.",
      requirements: "Previous event planning experience is preferred.",
    },
    {
      id: 2,
      role: "Social Media Volunteer",
      description: "Manage and create content for social media platforms.",
      requirements: "Experience with social media management tools is a plus.",
    },
    // Add more volunteer opportunities as needed
  ];

  return (
    <div className="get-involved-container">
      <h2 className="section-title">Volunteer Opportunities</h2>
      <p className="section-description">
        Explore ways to contribute to the festival by volunteering. Below are
        some of the available roles:
      </p>

      <ul className="opportunities-list">
        {volunteerOpportunities.map((opportunity) => (
          <li key={opportunity.id} className="opportunity-item">
            <h3 className="opportunity-role">{opportunity.role}</h3>
            <p className="opportunity-description">{opportunity.description}</p>
            <p className="opportunity-requirements">
              <strong>Requirements:</strong> {opportunity.requirements}
            </p>
            <a href="/volunteer-application" className="apply-now-link">
              Apply Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetInvolved;
