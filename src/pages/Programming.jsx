import React from "react";

function Programming() {
  const eventSchedule = [
    {
      id: 1,
      date: "July 1, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Main Stage",
    },
    {
      id: 2,
      date: "July 1, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Cultural Exhibitions Area",
    },
    // Add more events as needed
  ];

  const eventCategories = [
    {
      id: 1,
      name: "Cultural Exhibitions",
      description:
        "Explore the rich cultural heritage of Africa through various exhibits.",
    },
    {
      id: 2,
      name: "Performances",
      description:
        "Experience captivating performances showcasing Africa’s artistic talent.",
    },
    {
      id: 3,
      name: "Screenings",
      description:
        "Enjoy thought-provoking film screenings that highlight African stories.",
    },
    {
      id: 4,
      name: "Discussions",
      description:
        "Engage in insightful discussions on topics shaping African societies.",
    },
    // Add more categories as needed
  ];

  return (
    <div className="programming-container">
      {/* Event Schedule */}
      <div className="event-schedule" style={sectionStyles}>
        <h2>Event Schedule</h2>
        <ul>
          {eventSchedule.map((event) => (
            <li key={event.id}>
              <strong>{event.date}</strong> | {event.time} | {event.location}
            </li>
          ))}
        </ul>
      </div>

      {/* Event Categories */}
      <div className="event-categories" style={sectionStyles}>
        <h2>Event Categories</h2>
        <ul>
          {eventCategories.map((category) => (
            <li key={category.id} className="category-item">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              {/* Add a link to detailed descriptions of respective events within each category */}
              <a href={`/events/${category.id}`} className="view-events-link">
                View Events
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Styles (you can customize these styles)
const sectionStyles = {
  margin: "20px",
  padding: "20px",
  border: "1px solid #ddd",
  backgroundColor: "#fff", // Background color for sections
  borderRadius: "8px", // Border radius for sections
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow for sections
};

export default Programming;
