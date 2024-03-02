import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Background from "../assets/Yellow.jpeg";
import ManHand from "../assets/manhand.jpg";
import Story from "../assets/Vision.jpg";
import Guiter from "../assets/Gitarart.jpg";
import DropdBack from "../assets/Festpic.webp";
import FAQs from "./FAQs";
import "../Styles/Home.css";

const Home = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

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
        <p>Festivals are a powerful way to bring people together and celebrate diversity.</p>
      </div>

      <section>
        <div className="row">
          <div className="col-6">
            <div className="Call-to-Action">
              <h3>Ready to Embark on a Journey of Discovery?</h3>
              <img src={ManHand} alt="Man Hand" />
              <p>Experience the Magic of the Kumbatia Festival!</p>
              <div className="bck">
                <img src={DropdBack} alt="Background" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="dropdownAbt">
        <span className="toggle-btn" onClick={toggleParagraph}>
          {showParagraph ? "-" : "+"}
        </span>
        {showParagraph && (
          <Container>
            <Card className="about-card">
              <Card.Body>
                <p>
                  Introducing the Kumbatia Afrika Peace Festival, an initiative by Youth Voices Community and African Grassroots Media Alliance.  The inaugural edition of the festival is slated for July 2024.
                  Festivals are a powerful way to bring people together and celebrate diversity. They can provide a platform for people from different cultures to share their unique traditions and practices.  This can help to promote understanding, diversity, empathy, and harmony between different groups.
                  Kenya hosts a large population of refugees from African Countries, who have been forced to flee their homes due to conflict and persecution. These refugees face many cultural differences, challenges and discrimination in integrating into Kenyan society. The Peace Festival aims to overcome these challenges by celebrating diversity and advocating for integration through the limitless power of art.
                  The Peace Festival is an opportunity to foster peaceful coexistence between refugees and host communities in Kenya. The festival will seek to extend its influence to the broader African region.
                  The festival will feature a diverse array of cultural and artistic expressions from around Africa, showcasing the common values that we all share. Offerings will be devised to facilitate the exchange of cultural knowledge and personal experiences, fostering an atmosphere of appreciation, mutual learning and growth.
                  For refugees, the festival provides a safe and welcoming space to express their cultural heritage and share their stories, which can significantly help to reduce isolation, create a sense of belonging, and promote better representation and understanding.
                </p>
              </Card.Body>
            </Card>
          </Container>
        )}
      </div>

      <div className="flex-container">
        <div className="flex-column">
          <h2>Our Story</h2>
          <img src={Story} alt="Our Story" className="background-img" />
          <p>
            Welcome to the Kumbatia Africa Peace Festival, where the beating heart of Africa comes alive through the universal language of music and cultural celebration.
          </p>
        </div>

        <div className="flex-column">
          <h2>Our Mission</h2>
          <img src={Guiter} alt="Our Mission" className="background-img" />
          <p>
            At Kumbatia Africa Peace Festival, our mission is to unite Africa through the transcendent power of music, cultural exchange, and shared experiences.
          </p>
        </div>
      </div>

      <Container>
        <div className="faq-container">
          <FAQs renderFAQs={renderFAQs} />
        </div>
      </Container>
    </>
  );
};

export default Home;
