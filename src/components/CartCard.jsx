import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { formatNumber } from "../utils/utility-funcs";

export default function CartCard({
  nuke,
  handleRemoveFromCart,
  handleDecQuantity,
  handleIncQuantity,
}) {
  const { name, description, price, img } = nuke;
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity === 1) return;
    setQuantity((q) => q - 1);
  };
  const handleAdd = () => {
    setQuantity((q) => q + 1);
  };
  console.log("quantity", quantity);
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
          <button
            onClick={() => {
              handleMinus();
              handleDecQuantity(nuke);
            }}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              handleAdd();
              handleIncQuantity(nuke);
            }}
          >
            +
          </button>
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
