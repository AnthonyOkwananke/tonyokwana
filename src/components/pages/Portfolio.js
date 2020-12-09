import React from 'react';
import '../../App.css';
import './Portfolio.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h1>Welcome to my portfolio</h1>
      </div>
      <Cards/>
      <Footer/>
    </>
  )
}
