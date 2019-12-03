import React from "react";
import { Link } from "react-router-dom";
import useNavbar from "./../hooks/UseNavbar";

function Navbar() {
  const [count] = useNavbar();
  return (
    <div className="navbar-container">
      <div className="links">
        <p>
          <Link to="/" className="mr-2">
            Products{" "}
          </Link>
        </p>
      </div>
      <div className="links">
        <p>
          <Link to="/shopping-cart-page" className="mr-2">
            <i className="fa fa-shopping-cart"></i> {count ? count : null}{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Navbar;
