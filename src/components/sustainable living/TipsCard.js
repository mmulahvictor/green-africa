// TipsCard.js
import React from "react";
// import './TipsCard.css'

const TipsCard = ({ title, image, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Get More Tips
        </a>
      </div>
    </div>
  );
};

export default TipsCard;
