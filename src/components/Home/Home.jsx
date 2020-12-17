import React from 'react'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image"></div>
        <div className="container hero-desc-wrapper">
          <h1>CREATE AND<br />SHARE YOUR<br />PHOTO STORIES.</h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <a href="/">GET AN INVITE</a>
        </div>
      </section>
      <section>
        <div className="hero-image"></div>
          <div className="container hero-desc-wrapper">
            <h1>BEAUTIFUL<br />STORIES EVERY<br />TIME</h1>
           <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <a href="/">VIEW THE STORIES</a>
        </div>
      </section>
      <section>
        <div className="hero-image"></div>
          <div className="container hero-desc-wrapper">
            <h1>DESIGN FOR<br />EVERYONE</h1>
            <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
            <a href="/">VIEW THE STORIES</a>
        </div>
      </section>
    </main>
  )
}

export default Home
