// Footer.jsx

import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../assets/africanmendr.jpg";
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
        <span>
          &copy; 2024, Kumbatia Afrika, developed by Dralagar George. Made with
          ReactJS.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
