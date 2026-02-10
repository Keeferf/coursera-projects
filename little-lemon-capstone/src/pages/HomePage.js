// src/pages/HomePage.js
import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
// import About from "../components/About";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Full width section */}
      <Hero />

      {/* Constrained width sections */}
      <div className="content-wrapper">
        <Highlights />
        <Testimonials />
        {/* <About /> */}
      </div>
    </div>
  );
};

export default HomePage;
