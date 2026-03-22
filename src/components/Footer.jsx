import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-tertiary">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo"><span className="text-accent">Air</span>dum</div>
          <p className="footer-desc">Premium aftermarket car accessories for discerning enthusiasts. Performance meets aesthetics.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#catalogue">Catalogue</a></li>
              {/* <li><a href="#about">About Us</a></li> */}
            </ul>
          </div>
          {/* <div className="link-group">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Lighting</a></li>
              <li><a href="#">Exterior</a></li>
              <li><a href="#">Performance</a></li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="footer-bottom glass">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Airdum Accessories. Built for speed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
