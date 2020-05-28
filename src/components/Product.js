import React, { useState } from "react";
import { formatNumber } from "../utils/utility-funcs";

export default function Product({ nuke, handleAddToCart }) {
  const { img, name, description, price } = nuke;

  const [isActive, setIsActive] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);

  const activeOn = () => {
    setIsActive(true);
  };

  const activeOff = () => {
    setIsActive(false);
  };

  const handleClicked = () => {
    setWasClicked(true);
    setTimeout(() => setWasClicked(false), 1000);
  };

  return (
    <div className="product-card">
      <div
        className="card-image-list-container"
        onMouseOver={activeOn}
        onMouseOut={activeOff}
      >
        <img src={img} alt="nuke" style={{ opacity: isActive ? 1 : 0.7 }} />
      </div>
      <div className="card-title-container">
        <h1 className={isActive ? "underlined" : ""}>{name}</h1>
        <h4>${formatNumber(price)}</h4>
        <p>{description}</p>
      </div>
      <div className="btn-container">
        <a>
          <button
            className={wasClicked ? "card-btn-clicked" : ""}
            onClick={() => {
              handleAddToCart(nuke);
              handleClicked();
            }}
          >
            {wasClicked ? "Added!" : "Add to Cart"}
          </button>
        </a>
      </div>
      <p className="disclaimer">
        {" "}
        *Acquiring nuclear armaments requires an online consultation with a
        military professional who will determine if a nuclear bomb is
        appropriate.
      </p>
    </div>
  );
}
