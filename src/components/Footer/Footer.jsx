import React from 'react'

// images
import logo from '../../assets/shared/desktop/logo-white.svg';

function Footer() {
  return (
    <footer className="main-footer footer-container">
      <img className="footer-logo" src={logo} alt="photosnap logo" />
      <div className="social-links-wrapper">
        <i className="social-icon social-icon-facebook"></i>
        <i className="social-icon social-icon-youtube"></i>
        <i className="social-icon social-icon-twitter"></i>
        <i className="social-icon social-icon-pinterest"></i>
        <i className="social-icon social-icon-instagram"></i>
      </div>
      <ul className="footer-links-wrapper">
        <li><a href="/">HOME</a></li>
        <li><a href="/stories">STORIES</a></li>
        <li><a href="/features">FEATURES</a></li>
        <li><a href="/pricing">PRICING</a></li>
      </ul>
      <a className="arrow" href="/">GET AN INVITE</a>
      <p>Copyright 2019. All rights reserved</p>
    </footer>
  )
}

export default Footer
