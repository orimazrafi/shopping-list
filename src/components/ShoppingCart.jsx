import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ShoppingCart() {
  const { data, handleEmptyProdcut } = useContext(ProductContext);
  const items = [...data].filter(d => d.count > 0);

  return (
    <div>
      {items &&
        items.map(p => (
          <div key={p.id} className="card mt-4 mb-4 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 text-center font-weight-bold">{p.name}</h2>
            </div>
            <div className="card-body">
              <div className="shopping-card-content">
                <div className="image-container">
                  <img
                    src={require(`../assets/products-images/${p.url}`)}
                    alt={p.name}
                  />
                </div>
                <div className="text-container mt-3 mb-4">
                  <div className="discription-container">
                    <h3 className="text-muted">description: {p.description}</h3>
                  </div>
                  <div>
                    <h4>price per unit : {p.price}$</h4>
                    {p.chosenSize && (
                      <h4 className="active"> choosen Size: {p.chosenSize}</h4>
                    )}
                    <h4>count: {!p.count ? 0 : p.count}</h4>
                    <h4>total price: {p.count * p.price}$ </h4>
                  </div>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                    )
                      handleEmptyProdcut(p.id);
                  }}
                  className="btn btn-lg btn-outline-primary"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default ShoppingCart;
