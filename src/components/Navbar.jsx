import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ data }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const caculateNumberOfProducts = () => {
      let items = [...data];
      let numberOfItems = items.filter(i => i.count > 0).length;
      setCount(numberOfItems);
    };
    caculateNumberOfProducts();
  }, [data]);

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
