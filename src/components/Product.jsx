import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";

function Product({ p }) {
  const { handleIncrement, handleDecrement, handleSize } = useContext(
    ProductContext
  );
  function handleName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
  return (
    <div key={p.id} className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="text-center font-weight-bold"> {handleName(p.name)}</h4>
      </div>
      <div className="card-body">
        <div className="card-content">
          <div>
            <img
              src={require(`../assets/products-images/${p.url}`)}
              alt={p.name}
            />
          </div>
          <div className="text-container">
            <div className="discription-container">
              <small className="text-muted">{p.description}</small>
            </div>
            <p>price per unit: {p.price}$</p>
            {p.count > 0 && <p>count: {!p.count ? 0 : p.count}</p>}
            {p.count > 0 && <p> total price: {p.price * p.count}$</p>}
            {p.sizes.length > 0 && (
              <div
                className={
                  p.count > 0
                    ? "sizes-container remove-space"
                    : "sizes-container"
                }
              >
                {p.sizes.map(size => (
                  <p
                    key={size}
                    className={size === p.chosenSize ? "active" : "no-active"}
                    onClick={() => handleSize(p.id, size)}
                  >
                    {" "}
                    {size}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        {!p.count ? (
          <div className="button-container mt-2">
            <button
              type="button"
              onClick={() => handleIncrement(p.id)}
              className="btn btn-lg btn-outline-primary"
              disabled={p.sizes && p.sizes.length > 0 && !p.chosenSize}
            >
              Add
            </button>
          </div>
        ) : (
          <div className="plus-and-minus-container mt-2">
            <button
              type="button"
              className="btn btn-lg btn-outline-primary"
              onClick={() => handleIncrement(p.id)}
            >
              <i className="fa fa-plus"></i>
            </button>
            <button
              type="button"
              onClick={() => handleDecrement(p.id)}
              className="btn btn-lg btn-outline-primary"
            >
              <i className="fa fa-minus"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Product;
