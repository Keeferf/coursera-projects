// src/components/Highlights.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Highlights.css";

const Highlights = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/menu");
  };
  const handleOnlineOrderClick = () => {
    navigate("/order-online");
  };
  const specials = [
    {
      id: 1,
      name: "Lorem ipsum",
      price: "$5.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/",
    },
    {
      id: 2,
      name: "Lorem ipsum",
      price: "$5.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/",
    },
    {
      id: 3,
      name: "Lorem ipsum",
      price: "$5.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "/",
    },
  ];

  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This Week's Specials!</h2>
        <button className="online-menu-button" onClick={handleMenuClick}>
          Online Menu
        </button>
      </div>

      <div className="specials-grid">
        {specials.map((special) => (
          <article key={special.id} className="special-card">
            <div className="special-image-wrapper">
              <img
                src={special.image}
                alt={special.name}
                className="special-image"
              />
            </div>
            <div className="special-content">
              <div className="special-header">
                <h3>{special.name}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p className="special-description">{special.description}</p>
              <button
                className="delivery-button"
                onClick={handleOnlineOrderClick}
              >
                Order Delivery
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
