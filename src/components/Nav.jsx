import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Nav({ handleOpenCart, cartLength }) {
  return (
    <div className="nav-container">
      <a href="">
        <h2>BLACK MARKET MARKET</h2>
      </a>
      <a href="#products">
        <h2 id="catalog">Catalog</h2>
      </a>
      <a href="#">
        <button id="cart" onClick={handleOpenCart}>
          <FaShoppingCart />
          {!cartLength ? null : cartLength}
        </button>
      </a>
      {/* {!cartLength ? null : <p id="cart-length">{cartLength}</p>} */}
    </div>
  );
}
