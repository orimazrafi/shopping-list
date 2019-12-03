import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function UseNavbar() {
  const { data } = useContext(ProductContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const caculateNumberOfProducts = () => {
      let purchaseProducts = data.filter(i => i.count > 0).length;
      setCount(purchaseProducts);
    };
    caculateNumberOfProducts();
  }, [data]);
  return [count];
}
export default UseNavbar;
