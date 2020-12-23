import React from "react";

function Card({ card }) {
  return (
    <div className={`card ${card.page}-card-${card.id}`}>
      <div className="desc-wrapper">
        <h3>{card.name}</h3>
        <p>By {card.author}</p>
        <p className="line"></p>
        <div className="card-button-wrapper">
          <a className="arrow" href="/">
            READ STORY
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
