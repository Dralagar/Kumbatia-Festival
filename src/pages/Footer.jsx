// Footer.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import Logo from "../assets/africanmendr.jpg";
import TwitterXIcon from "./TwitterXIcon"; // Import TwitterXIcon component
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="Contain">
      <footer className="footerCon">
        <div className="img">
          <img
            src={Logo}
            alt="Youth Echo Impact Logo - Uplifting New Voices"
            width={100}
            height={60}
          />
        </div>
        <div className="social-links">
          {/* Social media icons with links */}
          <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/youthVoicesCom" target="_blank" rel="noopener noreferrer"><TwitterXIcon /></a> {/* Render TwitterXIcon component */}
          <a href="https://www.instagram.com/youthvoices_community/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <span>
          &copy; 2024, Kumbatia Afrika, developed by Dralagar George. Made with
          ReactJS.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
