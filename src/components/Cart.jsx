import React from "react";
import { FaTimes } from "react-icons/fa";
import CartCard from "./CartCard";

export default function Cart({
  cart,
  cartOpen,
  handleCloseCart,
  handleRemoveFromCart,
}) {
  return (
    <div className={`cart-container ${cartOpen ? "" : "cart-hidden"}`}>
      <div id="cart-header">
        <button id="cart-x" onClick={handleCloseCart}>
          <FaTimes />
        </button>
        <h2>Cart</h2>
      </div>
      {cart.map((nuke) => (
        <CartCard
          nuke={nuke}
          key={nuke.id}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div className="cart-form">
        <ul>
          <li>
            <div className="form-line">
              <p>Sub Total</p>
              <p>$16</p>
            </div>
          </li>
          <li>
            <div className="form-line">
              <p>Processing</p>
              <p>$5</p>
            </div>
          </li>
          <li>
            <div className="form-line">
              <p>
                <b>Grand Total</b>
              </p>
              <p>
                <b>$35</b>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="next-container">
        <p>Next</p>
      </div>
    </div>
  );
}
