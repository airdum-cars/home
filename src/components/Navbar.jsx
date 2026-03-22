import React from 'react';
import './Navbar.css';
import cataloguePdf from '../assets/catalogue.pdf';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <div className="logo">
          <span className="text-accent">Air</span>dum
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#catalogue">Catalogue</a></li>
        </ul>
        <div className="nav-actions">
          <a href={cataloguePdf} download="Airdum-Catalogue.pdf" className="btn btn-outline">
            Download Catalogue
          </a>
          <button
            className="btn btn-outline"
            onClick={() => {
              const message = "Hello Airdum Enterprises, I have a query regarding your car accessories.";
              window.open(`https://wa.me/7011209823?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
