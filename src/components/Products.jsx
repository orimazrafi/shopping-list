import React from "react";
import Product from "./Product";
function Products({ items, handleDecrement, handleIncrement, handleSize }) {
  return (
    <div className="products-container">
      {items &&
        items.length > 0 &&
        items.map(p => (
          <Product
            key={p.id}
            p={p}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleSize={handleSize}
          />
        ))}
    </div>
  );
}
export default Products;
