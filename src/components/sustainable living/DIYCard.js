// DIYCard.js
import React from "react";
import './DIYcard.css' 

const DIYCard = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default DIYCard;
