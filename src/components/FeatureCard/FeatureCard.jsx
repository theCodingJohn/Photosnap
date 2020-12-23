import React from 'react'

function FeatureCard({card}) {
  return (
    <div className={`feature-card feature-card-${card.id}`}>
      <img src={card.img} alt={card.alt}/>
      <h3>{card.title}</h3>
      <p>{card.desc }</p>
    </div>
  )
}

export default FeatureCard
