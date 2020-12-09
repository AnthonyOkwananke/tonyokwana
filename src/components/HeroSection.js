import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Tony</h1>
      <h2>I'm a software developer</h2>
      <p>Welcome to my website</p>
      <p>I hope you enjoy it!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Know More
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
