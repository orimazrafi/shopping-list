import React, { useContext } from "react";
import { FeaturesContext } from "../context/FeaturesContext";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";

function Products() {
  const { text, isAsending } = useContext(FeaturesContext);
  const { data } = useContext(ProductContext);

  const filteredArray =
    text.length === 0
      ? data
      : data.filter(i =>
          i.name.toLowerCase().includes(text.toLocaleLowerCase().trim())
        );
  if (isAsending)
    isAsending === "asen"
      ? filteredArray.sort((a, b) => b.price - a.price)
      : filteredArray.sort((a, b) => a.price - b.price);

  return (
    <div className="products-container">
      {filteredArray.length > 0 ? (
        filteredArray.map(p => <Product key={p.id} p={p} />)
      ) : (
        <h2 className="mt-4">there are no results, try a different key.</h2>
      )}
    </div>
  );
}
export default Products;
