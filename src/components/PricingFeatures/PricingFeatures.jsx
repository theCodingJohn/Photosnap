import React from "react";

import check from "../../assets/pricing/desktop/check.svg";

const PricingFeatures = () => {
  const features = [
    {
      feature: "unlimited story posting",
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: "unlimited photo upload",
      basic: true,
      pro: true,
      business: true,
    },
    {
      feature: "embedding custom content",
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: "customize metadata",
      basic: false,
      pro: true,
      business: true,
    },
    {
      feature: "advanced metrics",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "photo downloads",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "search engine indexing",
      basic: false,
      pro: false,
      business: true,
    },
    {
      feature: "custom analytics",
      basic: false,
      pro: false,
      business: true,
    },
  ];

  return (
    <section className="container pricing_features">
      <div className="row table_head">
        <div className="col table_head_text">
          <h4>THE FEATURES</h4>
          <div className="tier_wrapper">
            <span>basic</span>
            <span>pro</span>
            <span>business</span>
          </div>
        </div>
      </div>
      {features.map((feature) => {
        return (
          <div className="row">
            <div className="col features_wrapper">
              <h5>{feature.feature}</h5>
              <div className="check_wrapper">
                <span>
                  {feature.basic && <img src={check} alt="check"></img>}
                </span>
                <span>
                  {feature.pro && <img src={check} alt="check"></img>}
                </span>
                <span>
                  {feature.business && <img src={check} alt="check"></img>}{" "}
                </span>
              </div>
              <div className="tier_card_wrapper">
                <div className="tier_card">
                  <span className="tier">basic</span>
                  {feature.basic && (
                    <span>
                      <img src={check} alt="check"></img>
                    </span>
                  )}
                </div>
                <div className="tier_card">
                  <span className="tier">pro</span>
                  {feature.pro && (
                    <span>
                      <img src={check} alt="check"></img>
                    </span>
                  )}
                </div>
                <div className="tier_card">
                  <span className="tier">business</span>
                  {feature.business && (
                    <span>
                      <img src={check} alt="check"></img>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PricingFeatures;
