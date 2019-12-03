import React from "react";
import ShoppingCart from "../components/shoppingCart";
import TotalAmount from "../components/TotalAmount";

function ShoppingCartPage({ data, handleEmptyProdcut }) {
  const items = data.filter(item => item.count > 0);
  const totalAmount =
    items && items.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  return (
    <>
      <ShoppingCart items={items} handleEmptyProdcut={handleEmptyProdcut} />
      <TotalAmount totalAmount={totalAmount}></TotalAmount>
    </>
  );
}
export default ShoppingCartPage;
