import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
function TotalAmount() {
  const { data } = useContext(ProductContext);
  const items = data.filter(item => item.count > 0);
  const totalAmount =
    items && items.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  return (
    <div className="mt-3 mb-3 text-center">
      {totalAmount === 0 ? (
        <div className="no-purchase-container">
        <h2>You have not purchase anything yet!</h2>
        </div>
      ) : (
        <h2 className="total-display">you'r total amount is: {totalAmount} $</h2>
      )}
    </div>
  );
}
export default TotalAmount;
