import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>
          Elevate Your Ride With <span className="text-accent">Premium Setup</span>
        </h1>
        <p>Discover the finest collection of high-performance car accessories designed for enthusiasts who demand the best in quality and aesthetics.</p>
        <div className="hero-buttons">
          <a href="#catalogue" className="btn btn-primary">Shop Collection</a>
          {/* <a href="#about" className="btn btn-outline">Learn More</a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
