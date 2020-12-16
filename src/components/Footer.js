import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <a href="mailto:anthonyokwananke@gmail.com" className="contact-mail" target="_blank">anthonyokwananke@gmail.com</a>
            <a href="tel: 4036306292" className="contact-phone">+1 (403) 630-6292</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.linkedin.com/in/anthony-okwananke"
              rel="noopener noreferrer"
              target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/AnthonyOkwananke"
              rel="no opener noreferrer"
              target="_blank">
              Github
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Links</h2>
            <Link to='./'>Home</Link>
            <Link to='./About'>About</Link>
            <Link to='./Portfolio'>Portfolio</Link>
            <Link to='./Resume'>Resume</Link>
          </div>
        </div>
      </div>
      <section className='copyright'>
        <div className='cpoyright-wrap'>
          <small className='website-rights'>Copyright © Anthony Okwananke. All rights reserved.</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
