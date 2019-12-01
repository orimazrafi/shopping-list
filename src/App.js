import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ShppingCart from "./components/ShoppingCart";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/shopping-cart">
          <ShppingCart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
