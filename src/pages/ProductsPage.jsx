import React, { useContext } from "react";
import Products from "./../components/Products";
import Input from "../components/Input";
import Sort from "../components/Sort";
import { ProductContext } from "../context/ProductContext";
import { FeaturesContext } from "../context/FeaturesContext";
function ProductsPage() {
  const { data } = useContext(ProductContext);
  const { text, isAsending } = useContext(FeaturesContext);

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
    <>
      <div className="filters-container mt-4">
        <Input />
        <Sort />
      </div>
      <Products></Products>
    </>
  );
}
export default ProductsPage;
