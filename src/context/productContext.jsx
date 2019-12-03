import React from "react";
import UseProduct from "../hooks/UseProduct";

const ProductContext = React.createContext();

function ProductContextProvider(props) {
  const [
    data,
    handleIncrement,
    handleDecrement,
    handleEmptyProdcut,
    handleSize
  ] = UseProduct();

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
