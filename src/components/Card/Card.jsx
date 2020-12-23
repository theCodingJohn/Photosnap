import React from "react";

function Card({ card }) {
  return (
    <div className={`card card-${card.id}`}>
      <div className="desc-wrapper">
        {card.date && <p className="card-date">{card.date}</p>}
        <h3>{card.name}</h3>
        <p>By {card.author}</p>
        <span style={{display: 'inline-block'}} className="line"></span>
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
