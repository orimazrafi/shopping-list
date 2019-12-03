import React, { useContext } from "react";

import { ProductContext } from "../context/productContext";
function TotalAmount() {
  const { data } = useContext(ProductContext);
  const items = data.filter(item => item.count > 0);
  const totalAmount =
    items && items.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  return (
    <div className="mt-3 mb-3 text-center">
      {totalAmount === 0 ? (
        <h3>You have not purchase anything yet!</h3>
      ) : (
        <h3>you'r total amount is: {totalAmount} $</h3>
      )}
    </div>
  );
}
export default TotalAmount;
