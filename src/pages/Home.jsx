import React, { useState } from "react";
import "../Styles/Home.css";
import Background from "../assets/unity-in-diversity.jpg";
import ManHand from "../assets/manhand.jpg";
import Story from "../assets/Vision.jpg";
import Guiter from "../assets/Gitarart.jpg";
import { Container } from "react-bootstrap";
import FAQs from "./FAQs";

const Home = () => {
  // State to manage the visibility of the paragraph
  const [showParagraph, setShowParagraph] = useState(false);

  // Function to toggle the visibility of the paragraph
  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  // Placeholder FAQs data
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
    <>
      <div className="header">
        <h2>Shared Humanity, Shared Prosperity</h2>

        <div
          className="background-img"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <h1>Kumbatia Africa Peace Festival</h1>
        </div>
        <p>
          Festivals are a powerful way to bring people together and celebrate
          diversity.
        </p>
      </div>
      <section>
        <div className="Call-to-Action">
        
  <h3>Ready to Embark on a Journey of Discovery?</h3>
  <img src={ManHand} alt="Man Hand beating African Traditional wearing colorful bracellets of the hands"/>
   
  <p>Experience the Magic of the Kumbatia Festival!</p>
</div>

        

      </section>
      <div className="dropdownAbt">
     <span className="toggle-btn" onClick={toggleParagraph}>
          {showParagraph ? "-" : "+"}
        </span>
        {showParagraph && (
          <p>Step into the vibrant world of the Kumbatia Africa Peace Festival, where Africa's soul thrives through the harmonious blend of music, arts, fashion, and cultural revelry. From the bustling streets of Nairobi to the tranquil landscapes of Cape Town, our festival is a tapestry of unity, diversity, and shared humanity.

          At Kumbatia, we champion the power of embracing diversity and honoring individual uniqueness. Our festival serves as a melting pot of cultures, where people from all walks of life gather to showcase their heritage, traditions, and creative talents.
          
          Imagine wandering through our bustling marketplace adorned with exquisite handcrafted jewelry, vibrant textiles, and traditional artifacts from across the continent. Here, you can immerse yourself in the essence of Africa as artisans and vendors share their stories with passion and pride.
          
          As the sun sets, our main stage comes alive with electrifying performances by some of Africa's finest musicians and performers. From soulful melodies to captivating dance routines, our lineup celebrates the diverse sounds and rhythms that define our rich African heritage.
          
          Yet, the Kumbatia Festival goes beyond mere entertainment—it's a platform for dialogue, exchange, and reflection. Through open mic panels and interactive workshops, we invite attendees to engage in meaningful conversations about peace, identity, and social justice. Here, voices are heard, stories are shared, and connections are forged across cultures and borders.
          
          Join us as we embark on a journey of discovery and celebration. Experience the essence of our culture, embrace our uniqueness, and together, let's build a world where diversity is celebrated, differences are embraced, and peace reigns supreme. Welcome to the Kumbatia Africa Peace Festival.
          </p>
        )}
      </div>

      <div className="flex-container">
        <div className="flex-column">
          {/* Content for the first column (col-6 equivalent) */}
          <h2>Our Story</h2>
          <img src={Story} alt="Our Story" className="background-img" />
          <p>
            Welcome to the Kumbatia Africa Peace Festival, where the beating
            heart of Africa comes alive through the universal language of music
            and cultural celebration. At Kumbatia, we believe in the
            transformative power of unity, diversity, and shared experiences...
          </p>
        </div>

        <div className="flex-column">
          {/* Content for the second column (col-6 equivalent) */}
          <h2>Our Mission</h2>
          <img src={Guiter} alt="Our Mission" className="background-img" />
          <p>
            At Kumbatia Africa Peace Festival, our mission is to unite Africa
            through the transcendent power of music, cultural exchange, and
            shared experiences...Mission: To Serve as a dynamic platform where
            Africa's rich cultural diversity and artistic talent unite
            communities and become a force for peace and social integration.
          </p>
        </div>
      </div>

      {/* Include FAQsComponent within the Home component */}
      <Container>
        <div className="faq-container">
          <FAQs renderFAQs={renderFAQs} />
        </div>
      </Container>
    </>
  );
};

export default Home;
