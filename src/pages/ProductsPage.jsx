import React, { useState } from "react";
import Products from "./../components/Products";
import Input from "../components/Input";
import Sort from "../components/Sort";
function ProductsPage({
  data: items,
  handleDecrement,
  handleIncrement,
  handleSize
}) {
  const [text, setText] = useState("");
  const [isAsending, setAsendingSort] = useState(undefined);
  function handleChange({ value }) {
    setText(value);
  }

  function handleSort() {
    if (isAsending === undefined) return setAsendingSort("asen");
    setAsendingSort(prevState => {
      return prevState === undefined || prevState === "desc" ? "asen" : "desc";
    });
  }

  const filteredArray =
    text.length === 0
      ? items
      : items.filter(i =>
          i.name.toLowerCase().includes(text.toLocaleLowerCase().trim())
        );
  if (isAsending)
    isAsending === "asen"
      ? filteredArray.sort((a, b) => b.price - a.price)
      : filteredArray.sort((a, b) => a.price - b.price);

  return (
    <div>
      {/* <h1>Products</h1> */}
      <div className="filters-container mt-4">
        <Input handleChange={handleChange} text={text} />
        <Sort isAsending={isAsending} handleSort={handleSort} />
      </div>
      <Products
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleSize={handleSize}
        items={filteredArray}
      ></Products>
    </div>
  );
}
export default ProductsPage;
