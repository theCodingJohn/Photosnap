import React from 'react'

function PricingCard({card}) {
  return (
    <div className={`pricing-card ${card.role}`}>
      <h3>{card.role}</h3>
      <p>{card.desc}</p>
      <h2>${card.price}</h2>
      <span className="frequency">per {card.frequency}</span>
      <a className={`pick-plan-button pick-plan-button-${card.role}`}>PICK PLAN</a>
    </div>
  )
}

export default PricingCard
