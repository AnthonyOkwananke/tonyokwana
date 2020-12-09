import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/mywebsite.png'
              text='A fully responsive personal website built with React.js, React Router, React Hook, HTML, and CSS.'
              label='Website'
              pathname='https://github.com/AnthonyOkwananke/CurrentSeasonDisplay'
            />
            <CardItem
              src='images/Season-Display-App.png'
              text='An app that displays a UI corresponding to the
              current weather season given the geolocation of a place
              and time of the year.'
              label='Season'
              pathname='https://github.com/AnthonyOkwananke/CurrentSeasonDisplay'
            />
            <CardItem
              src='images/Step_Wizard.png'
              text='A multistep form that takes the user through 
              the necessary steps in filling out a form'
              label='Form'
              pathname='https://github.com/AnthonyOkwananke/stepwizard'
            />
          </ul>
          <ul className='cards__items'>
      
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
