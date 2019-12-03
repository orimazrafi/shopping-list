import React from "react";
function TotalAmount({ totalAmount }) {
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
