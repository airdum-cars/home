import React from 'react';
import './Navbar.css';

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
        <button
          className="btn btn-outline"
          onClick={() => {
            const message = "Hello Airdum Enterprises, I have a query regarding your car accessories.";
            window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
