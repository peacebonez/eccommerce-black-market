import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { nukes } from "./utils/inventory";

console.log(nukes);

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const cartLength = cart.length;
  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleAddToCart = (product) => {
    if (cart.includes(product)) return;
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    console.log("remove input!", product);
    setCart(cart.filter((nuke) => nuke.name !== product.name));
  };

  useEffect(() => {});

  console.log("cart:", cart);

  return (
    <div className="container">
      <Nav handleOpenCart={handleOpenCart} cartLength={cartLength} />
      <Heading />
      <Products nukes={nukes} handleAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        cartOpen={cartOpen}
        handleCloseCart={handleCloseCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
