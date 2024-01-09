// Partners.jsx

import React from "react";
import YVCimage from "../assets/YVC.png";
import AGMAImage from "../assets/agma.png";
import RELONLogo from "../assets/RELONLogo.png";
import SamuelHall from "../assets/SamuelHall.png";
import "../Styles/Partners.css";

const Partners = () => {
  const partnersData = [
    { id: "YVC", name: "YouthVoicesCom", image: YVCimage },
    { id: "AGMA", name: "AGMA", image: AGMAImage },
    {
      id: "RELON",
      name: "Refugee Led Organiation Network of Kenya",
      image: RELONLogo,
    },
    { id: "Samuel Hall", name: "Samuel Hall", image: SamuelHall },
  ];

  return (
    <div id="grid-container">
      <div id="title">
        <h1>Partners and Sponsors</h1>
      </div>
      <div id="left">
        <div className="flex-container">
          {partnersData.map((partner) => (
            <div key={partner.id} className="item">
              <img id={partner.id} src={partner.image} alt={partner.name} />
              <h3>{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
