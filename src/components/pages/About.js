import React from 'react';
import '../../App.css';
import './About.css';
import { AboutButton } from '../AboutButton';
import { AbtBackButton } from '../AbtBackButton';
import Footer from '../Footer';

export default function About() {
  return (
      <>
        <div className="about-container">
          <div className="about-row">
            <div className="col">
              <div className="about-text-wrapper">
                <h1 className="about-title">
                  A bit about myself
                </h1>
                <p>
                  I am Anthony Okwananke. I design websites,
                  build web applications and software products.
                </p>
                <br />
                <p>
                  I trained in engineering from where I saw that software
                  development is essential to automate the laborious
                  manual process.
                </p>
                <br />
                <p>
                  The passion to make life processes easier and to be a problem-solver
                  in my little capacity led me into software development.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <img src="images/Tony.jpg" alt="abt-img"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="abt-btn-container">
        <div className="about-btn">
              <AbtBackButton
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Back
              </AbtBackButton>
              <AboutButton
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Know More
              </AboutButton>
            </div>
        </div>

        <Footer />
      </>
    
    
    
  ) 
}
