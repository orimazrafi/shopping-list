import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <p className="link">
          <Link to="/" className="mr-2">
            Products{" "}
          </Link>
        </p>
      </div>
      <div className="navbar-buttons">
        <Link to="/shopping-cart">Shpping Cart</Link>
      </div>
    </div>
  );
}
export default Navbar;
