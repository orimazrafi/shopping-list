import { useState, useEffect } from "react";
import products from "../productsData";
import { toast } from "react-toastify";

function UseProduct() {
  const [data, setProducts] = useState([]);
  useEffect(() => {
    setProducts(products);
  }, []);
  function handleIncrement(productId) {
    const index = getIndex(productId);
    let products = [...data];
    products[index].count = !products[index].count
      ? 1
      : products[index].count + 1;
    setProducts(products);
  }
  function handleDecrement(productId) {
    const index = getIndex(productId);
    let products = [...data];
    products[index].count -= 1;
    products[index].chosenSize =
      products[index].count === 0 ? undefined : products[index].chosenSize;
    setProducts(products);
  }

  function getIndex(productId) {
    return data.findIndex(p => p.id === productId);
  }
  

  function handleEmptyProdcut(productId) {
    const index = getIndex(productId);
    let products = [...data];
    products[index].count = 0;
    products[index].chosenSize = undefined;
    setProducts(products);
    products.filter(i => i.count > 0).length === 0
      ? toast.error("The Shopping cart is empty!")
      : toast.info("Product had removed from cart!");
  }
  function handleSize(productId, size) {
    const index = getIndex(productId);
    let products = [...data];
    products[index].chosenSize = size;
    setProducts(products);
  }
  return [
    data,
    handleIncrement,
    handleDecrement,
    handleEmptyProdcut,
    handleSize
  ];
}
export default UseProduct;
