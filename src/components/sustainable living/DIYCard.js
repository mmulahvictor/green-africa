// DIYCard.js
import React from "react";
// import './DIYcard.css'

const DIYCard = ({ title, image, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default DIYCard;
