// TipsCard.js
import React from "react";
// import './TipsCard.css'

const TipsCard = ({ tip }) => {
  return (
    <div className="card">
      <img src={tip.image} alt={tip.title} />
      <div className="card-body">
        <h3>{tip.title}</h3>
        <p>{tip.description}</p>
        <a href={tip.link} target="_blank" rel="noopener noreferrer">
          Get More Tips
        </a>
      </div>
    </div>
  );
};

export default TipsCard;
