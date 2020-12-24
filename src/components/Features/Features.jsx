import React from 'react';
import Nav from '../Nav/Nav';
import FeatureCard from "../FeatureCard/FeatureCard";
import BetaCard from "../BetaCard/BetaCard";

// images
import responsive from "../../assets/features/desktop/responsive.svg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import embed from "../../assets/features/desktop/embed.svg";
import customDomain from "../../assets/features/desktop/custom-domain.svg";
import boostExposure from "../../assets/features/desktop/boost-exposure.svg";
import dragDrop from "../../assets/features/desktop/drag-drop.svg";

function Features() {
  return (
    <>
      <Nav list={{firstLink: 'home', secondLink: 'stories', thirdLink: 'pricing'}}/>
      <main className="features">
        <section className="hero hero-1">
          <div className="hero-image feature-hero-image"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-1">
            <h1>FEATURES</h1>
            <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
          </div>
        </section>
        <section className="container feature-card-container">
          <FeatureCard card={{ id: 1, title: '100% Responsive', desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.", img: `${responsive}`, alt: "different type of devices" }} />
          <FeatureCard card={{ id: 2, title: 'No Photo Upload Limit', desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.", img: `${noLimit}`, alt: "infinity icon" }} />
          <FeatureCard card={{ id: 3, title: 'Available to Embed', desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.", img: `${embed}`, alt: "a bunch of social media icon"}} />
          <FeatureCard card={{ id: 4, title: 'Custom Domain', desc: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!", img: `${customDomain}`, alt: "Custom Domain" }} />
          <FeatureCard card={{ id: 5, title: 'Boost Your Exposure', desc: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.", img: `${boostExposure}`, alt: "Boost Your Exposure" }} />
          <FeatureCard card={{ id: 6, title: 'Drag & Drop Image', desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.", img: `${dragDrop}`, alt: "Drag & Drop Image"}} />
        </section>
        <BetaCard/>
      </main>
    </>
  )
}

export default Features
