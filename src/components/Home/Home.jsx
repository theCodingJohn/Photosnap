import React from 'react';
import Nav from '../Nav/Nav';
import Card from "../Card/Card";
import FeatureCard from "../FeatureCard/FeatureCard";

// images
import responsive from "../../assets/features/desktop/responsive.svg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import embed from "../../assets/features/desktop/embed.svg";

function Home() {
  return (
    <>
    <Nav list={{firstLink: 'stories', secondLink: 'features', thirdLink: 'pricing'}}/>
    <main>
      <section className="hero hero-1">
        <div className="hero-image hero-image-1"></div>
        <div className="container hero-desc-wrapper hero-desc-wrapper-1">
          <h1>CREATE AND<br />SHARE YOUR<br />PHOTO STORIES.</h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <a className="arrow" href="/">GET AN INVITE</a>
        </div>
      </section>
      <section className="hero hero-2">
        <div className="hero-image hero-image-2"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-2">
            <h2>BEAUTIFUL<br />STORIES<br />EVERY TIME</h2>
           <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <a className="arrow" href="/">VIEW THE STORIES</a>
        </div>
      </section>
      <section className="hero hero-3">
        <div className="hero-image hero-image-3"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-3">
            <h2>DESIGN FOR<br />EVERYONE</h2>
            <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
            <a className="arrow" href="/">VIEW THE STORIES</a>
        </div>
        </section>
        <section className="card-container">
          <Card card={ {id: 1,name: "The Mountains", author: "John Appleseed"}}/>
          <Card card={ {id: 2,name: "Sunset Cityscapes", author: "Benjamin Cruz"}}/>
          <Card card={ {id: 3,name: "18 Days Voyage", author: "Alexei Borodin"}}/>
          <Card card={ {id: 4,name: "Architecturals", author: "Samantha Brooke"}}/>
        </section>
        <section className="container feature-card-container">
          <FeatureCard card={{ id: 1, title: '100% Responsive', desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.", img: `${responsive}`, alt: "different type of devices " }} />
          <FeatureCard card={{ id: 2, title: 'No Photo Upload Limit', desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.", img: `${noLimit}`, alt: "infinity icon" }} />
          <FeatureCard card={{ id: 3, title: 'Available to Embed', desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.", img: `${embed}`, alt: "a bunch of social media icon"}} />
        </section>
    </main>
    </>
  )
}

export default Home
