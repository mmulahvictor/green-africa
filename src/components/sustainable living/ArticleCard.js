// ArticleCard.js
import React from "react";
import './ArticleCard.css'

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <img src={article.image} alt={article.title} />
      <div className="card-body">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
