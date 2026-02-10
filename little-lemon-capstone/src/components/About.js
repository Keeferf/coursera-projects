// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Physical Location</h3>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="about-images">
          <img
            src="/chefs.jpg"
            alt="Little Lemon chefs in the kitchen"
            className="about-image about-image-front"
          />
          <img
            src="/restaurant.jpg"
            alt="Little Lemon restaurant interior"
            className="about-image about-image-back"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
