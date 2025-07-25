import React from 'react';
import './HeroSection.css';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <CountdownTimer targetDate="2025-07-28T00:00:00" />
        <h1><span className="hero-title-bold">Happy Birthday</span><br />Kabuki</h1>
        <p className="hero-description">
          Celebrate your special day with style, joy, and unforgettable memories. Let the party begin!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image-container">
        <img src="/images/about5.jpeg" alt="Hero Profile" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
