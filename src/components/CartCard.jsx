import React from "react";
import { FaTimes } from "react-icons/fa";
import { formatNumber } from "../utils/utility-funcs";

export default function CartCard({ nuke, handleRemoveFromCart }) {
  const { name, description, price, img } = nuke;
  return (
    <div className="cart-card">
      <img src={img} alt="product" />
      <div className="card-text-container">
        <p>
          <b>{name}</b>
        </p>
        <p className="card-description">{description}</p>
        <p>
          <b>${formatNumber(price)}</b>
        </p>
        <div className="card-btn-container">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      <div className="card-x-container">
        <button
          className="card-close-btn"
          onClick={() => handleRemoveFromCart(nuke)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
