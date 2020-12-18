import React from 'react'

function Home() {
  return (
    <main>
      <section className="hero hero-1">
        <div className="hero-image hero-image-1"></div>
        <div className="container hero-desc-wrapper hero-desc-wrapper-1">
          <h1>CREATE AND<br />SHARE YOUR<br />PHOTO STORIES.</h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <a href="/">GET AN INVITE</a>
        </div>
      </section>
      <section className="hero hero-2">
        <div className="hero-image hero-image-2"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-2">
            <h2>BEAUTIFUL<br />STORIES<br />EVERY TIME</h2>
           <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <a href="/">VIEW THE STORIES</a>
        </div>
      </section>
      <section className="hero hero-3">
        <div className="hero-image hero-image-3"></div>
          <div className="container hero-desc-wrapper hero-desc-wrapper-3">
            <h2>DESIGN FOR<br />EVERYONE</h2>
            <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
            <a href="/">VIEW THE STORIES</a>
        </div>
      </section>
    </main>
  )
}

export default Home
