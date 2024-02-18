import React from "react";

const FAQs = () => {
  const faqsData = [
    {
      question: "What is the Kumbatia Afrika Peace Festival?",
      answer:
        "The Kumbatia Afrika Peace Festival is a cultural celebration that...",
    },
    {
      question: "What are the goals of the festival?",
      answer:
        "The festival aims to promote unity, diversity, and peace across Africa...",
    },
    {
      question: "How can I attend the festival?",
      answer:
        "To attend the festival, you can purchase tickets through our website...",
    },
    // Add more questions and answers as needed
  ];

  const renderFAQs = () => {
    return faqsData.map((faq, index) => (
      <div key={index} className="faq-item">
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
      </div>
    ));
  };

  return (
    <div className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="common-questions">
        <h3>Common Questions</h3>
        {renderFAQs()}
      </div>

      <div className="festival-overview">
        <h3>Festival Overview</h3>
        {/* Include more specific FAQs related to festival logistics, goals, etc. */}
      </div>

      <div className="additional-resources">
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a href="/artist-biographies">Artist Biographies</a>
          </li>
          <li>
            <a href="/press-releases">Press Releases</a>
          </li>
          <li>
            <a href="/blog-posts">Blog Posts</a>
          </li>
          <li>
            <a href="/social-media-feeds">Social Media Feeds</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
