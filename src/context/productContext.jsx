import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import products from "../productsData";

const ProductContext = React.createContext();

function ProductContextProvider(props) {
  const [data, setProducts] = useState([]);
  useEffect(() => {
    setProducts(() => products);
  }, []);

  function handleIncrement(productId) {
    const index = data.findIndex(p => p.id === productId);
    let products = [...data];
    products[index].count = !products[index].count
      ? 1
      : products[index].count + 1;
    setProducts(products);
  }
  function handleDecrement(productId) {
    const index = data.findIndex(p => p.id === productId);
    let products = [...data];
    products[index].count -= 1;
    products[index].chosenSize =
      products[index].count === 0 ? undefined : products[index].chosenSize;
    setProducts(products);
  }

  function handleEmptyProdcut(productId) {
    const index = data.findIndex(p => p.id === productId);
    let products = [...data];
    products[index].count = 0;
    products[index].chosenSize = undefined;
    setProducts(products);
    products.filter(i => i.count > 0).length === 0
      ? toast.error("The Shopping cart is empty!")
      : toast.info("Product had removed from cart!");
  }
  function handleSize(productId, size) {
    const index = data.findIndex(p => p.id === productId);
    let products = [...data];
    products[index].chosenSize = size;
    setProducts(products);
  }

  return (
    <ProductContext.Provider
      value={{
        data,
        handleIncrement,
        handleDecrement,
        handleEmptyProdcut,
        handleSize
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContextProvider, ProductContext };
