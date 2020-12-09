import React from 'react';
import '../../App.css';
import CardItem from '../CardItem'
import Cards from '../Cards';
import Footer from '../Footer';

export default function Resume() {
    return (
        <>
            <div className="cards">
                <div className="cards-container">
                    <div className="cards-wrapper">
                        <ul className="cards__items">
                        <CardItem
                            src="images/resumeimage5.jpg"
                            text="Click here to see my CV"
                            label="Resume"
                            pathname="https://docs.google.com/document/d/1Z1wY8af98AeMc2gw4RE_Hpwpe5_9fFcx3dhSEacUelc/edit#"
                        />
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}