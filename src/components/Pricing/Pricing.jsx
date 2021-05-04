import React, { useState } from "react";
import Nav from "../Nav/Nav";
import PricingCard from "../PricingCard/PricingCard";
import BetaCard from "../BetaCard/BetaCard";
import PricingFeatures from "../PricingFeatures/PricingFeatures";
import { Helmet } from "react-helmet";

function Pricing() {
  const [togglerStatus, setTogglerStatus] = useState("off");
  const [price, setPrice] = useState({
    basic: "19.00",
    pro: "39.00",
    business: "99.00",
  });
  const [frequency, setFrequency] = useState("month");
  const handleClick = () => {
    setTogglerStatus(togglerStatus === "off" ? "on" : "off");
    setFrequency(frequency === "month" ? "year" : "month");
    if (togglerStatus === "on") {
      setPrice({
        basic: "19.00",
        pro: "39.00",
        business: "99.00",
      });
    } else {
      setPrice({
        basic: "190.00",
        pro: "390.00",
        business: "990.00",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Photosnap - Pricing</title>
      </Helmet>
      <Nav
        list={{
          firstLink: "home",
          secondLink: "stories",
          thirdLink: "features",
        }}
      />
      <main className="pricing">
        <section className="hero hero-1">
          <div className="hero-image pricing-hero-image"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-1">
            <h1>PRICING</h1>
            <p>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </section>
        <section className="container pricing-container">
          <div className={`price-toggler-wrapper ${togglerStatus}`}>
            <h2 className="monthly">Monthly</h2>
            <div onClick={handleClick} className="price-toggler">
              <div className="circle"></div>
            </div>
            <h2 className="yearly">Yearly</h2>
          </div>
          <div className="pricing-card-wrapper">
            <div>
              <PricingCard
                card={{
                  role: "Basic",
                  desc:
                    "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
                  price: price.basic,
                  frequency: frequency,
                }}
              />
            </div>
            <div>
              <PricingCard
                card={{
                  role: "Pro",
                  desc:
                    "More advanced features available. Recommended for photography veterans and professionals.",
                  price: price.pro,
                  frequency: frequency,
                }}
              />
            </div>
            <div>
              <PricingCard
                card={{
                  role: "Business",
                  desc:
                    "Additional features available such as more detailed metrics. Recommended for business owners.",
                  price: price.business,
                  frequency: frequency,
                }}
              />
            </div>
          </div>
        </section>
        <PricingFeatures />
        <BetaCard />
      </main>
    </>
  );
}

export default Pricing;
