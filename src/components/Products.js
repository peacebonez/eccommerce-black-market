import React from "react";
import Product from "./Product";

export default function Products({ nukes, handleAddToCart, itemAdded }) {
  let id = 0;
  return (
    <>
      <h2 id="products">Browse Our Products</h2>
      <div id="product-container">
        {nukes.map((nuke) => {
          id++;
          return (
            <Product
              key={id}
              id={id}
              nuke={nuke}
              handleAddToCart={handleAddToCart}
              itemAdded={itemAdded}
            />
          );
        })}
      </div>
    </>
  );
}
