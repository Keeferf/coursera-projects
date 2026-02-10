// src/components/Hero.js
import React from "react";
import { useNavigate } from "react-router-dom";
import food from "../assets/restauranfood.jpg";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/reservations");
  };

  return (
    <section className="hero">
      {/* Inner container matches navbar width */}
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Physical Location</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="hero-button" onClick={handleReserveClick}>
            Reserve a Table
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={food}
            alt="Little Lemon restaurant dish"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
