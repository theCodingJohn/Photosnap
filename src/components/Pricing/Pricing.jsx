import React from 'react'
import Nav from "../Nav/Nav";
import BetaCard from "../BetaCard/BetaCard";


function Pricing() {
  return (
    <>
      <Nav list={{firstLink: 'home', secondLink: 'stories', thirdLink: 'features'}}/>
      <main className="pricing">
      <section className="hero hero-1">
          <div className="hero-image pricing-hero-image"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-1">
            <h1>PRICING</h1>
            <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
          </div>
        </section>
        <BetaCard/>
      </main>
    </>
  )
}

export default Pricing
