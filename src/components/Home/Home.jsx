import React from 'react';
import Nav from '../Nav/Nav';
import Card from "../Card/Card";

function Home() {
  return (
    <>
    <Nav list={{stories: 'stories', features: 'features', pricing: 'pricing'}}/>
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
        <section className="home-card-container">
          <Card card={ {id: 1,name: "The Mountains", author: "John Appleseed", page: "home"}}/>
          <Card card={ {id: 2,name: "Sunset Cityscapes", author: "Benjamin Cruz", page: "home"}}/>
          <Card card={ {id: 3,name: "18 Days Voyage", author: "Alexei Borodin", page: "home"}}/>
          <Card card={ {id: 4,name: "Architecturals", author: "Samantha Brooke", page: "home"}}/>
        </section>
    </main>
    </>
  )
}

export default Home
