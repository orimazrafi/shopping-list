import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Navbar from "./components/Navbar";
import { FeaturesContextProvider } from "./context/FeaturesContext";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <FeaturesContextProvider>
            <ProductsPage />
          </FeaturesContextProvider>
        </Route>
        <Route path="/shopping-cart-page">
          <ShoppingCartPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
