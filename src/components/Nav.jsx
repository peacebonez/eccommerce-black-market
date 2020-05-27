import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Nav({ handleOpenCart }) {
  return (
    <div className="nav-container">
      <a href="#">
        <h2>BLACK MARKET MARKET</h2>
      </a>
      <a href="#browse-header">
        <h2 id="catalog">Catalog</h2>
      </a>
      <a href="#">
        <button id="cart" onClick={handleOpenCart}>
          <FaShoppingCart />
        </button>
      </a>
    </div>
  );
}
