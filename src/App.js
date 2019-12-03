import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import products from "./productsData";
import Navbar from "./components/Navbar";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
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
    <>
      <ToastContainer></ToastContainer>
      <Navbar data={data}></Navbar>

      <Switch>
        <Route exact path="/">
          <ProductsPage
            data={data}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleSize={handleSize}
          />
        </Route>
        <Route path="/shopping-cart-page">
          <ShoppingCartPage
            data={data}
            handleEmptyProdcut={handleEmptyProdcut}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
